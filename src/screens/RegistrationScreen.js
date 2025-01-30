import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, Animated} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/registrationScreenStyles';
import {useForm, Controller} from 'react-hook-form';
import authenticationService from '../services/authenticationService';
import { useGlobalModal } from '../context/GlobalModalContext';

const RegistrationScreen = ({navigation}) => {
  const { control, handleSubmit, watch, setValue, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });
  const [showPass, setShowPass] = useState(false);
  const [isShelter, setIsShelter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxError, setCheckboxError] = useState(true);
  const { showModal } = useGlobalModal();
  const [colorAnim] = useState(new Animated.Value(0));


  const onSubmit = async data => {
    setIsLoading(true);

    let adoptionType = '';
    if (data.transit && data.adoption) {
      adoptionType = 'BOTH';
    }
    if (adoptionType === 'BOTH' && data.isShelter) {
      adoptionType = 'ALL';
    } else if (data.transit) {
      adoptionType = 'TRANSIT';
    } else if (data.adoption) {
      adoptionType = 'ADOPTION';
    } else if (data.isShelter) {
      adoptionType = 'SHELTER';
    }

    const formData = {
      ...data,
      adoptionType: adoptionType,
    };

    console.log(formData)
    try {
      const currentUser = await authenticationService.register(formData);
      setIsLoading(false);

      if (!currentUser) {
        showModal('Error', 'No se pudo completar el registro', null);
        return;
      }

      showModal('¡Muy bien!', 'El usuario se registró con éxito', null);
      // Navigate to the profile photo upload screen or another appropriate screen
      navigation.navigate('HomeScreen');
    } catch (error) {
      setIsLoading(false);
      showModal('Error', 'No se pudo completar el registro', null);
    }
  };

  const validateCheckboxes = () => {
    const isChecked = watch('adoption') || watch('transit') || watch('isShelter');
    setCheckboxError(!isChecked);
    return isChecked || 'Al menos una opción debe estar seleccionada';
  };

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: !isValid ? 0 : 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isValid]);

  const buttonColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#787878', '#E76801'],
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>CREAR UNA CUENTA</Text>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          rules={{ required: true }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.name && { borderColor: 'red' }]}
              placeholder={errors.name ? "Nombre completo es requerido" : "Nombre completo"}
              placeholderTextColor={errors.name ? 'red' : '#67635d'}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          defaultValue=""
          rules={{ required: true }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.lastName && { borderColor: 'red' }]}
              placeholder={errors.lastName ? "Apellido es requerido" : "Apellido"}
              placeholderTextColor={errors.lastName ? 'red' : '#67635d'}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{ 
            required: "Email es requerido", 
            pattern: {
              value: /^(?!^\s*$)([^\s@]+@[^\s@]+\.[^\s@]+)$/,
            } 
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.email && { borderColor: 'red' }]}
              placeholder={errors.email ? errors.email.message : "Email"}
              placeholderTextColor={errors.email ? 'red' : '#67635d'}
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <View style={styles.passwordContainer}>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{ required: 'Contraseña es requerida' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, errors.password && { borderColor: 'red' }]}
                placeholder={errors.password ? "Contraseña es requerida" : "Contraseña"}
                placeholderTextColor={errors.password ? 'red' : '#67635d'}
                secureTextEntry={!showPass}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPass(!showPass)}>
            <Icon
              name={showPass ? 'visibility' : 'visibility-off'}
              size={20}
              color="#E76801"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Controller
            control={control}
            name="age"
            defaultValue=""
            rules={{ required: true }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.age && { borderColor: 'red' }]}
                placeholder={errors.age ? "Edad es requerida" : "Edad"}
                placeholderTextColor={errors.age ? 'red' : '#67635d'}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="dni"
            defaultValue=""
            rules={{ required: true }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.dni && { borderColor: 'red' }]}
                placeholder={errors.dni ? "DNI es requerido" : "DNI"}
                placeholderTextColor={errors.dni ? 'red' : '#67635d'}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        <View style={styles.row}>
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            rules={{ required: 'Celular es requerido' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.phone && { borderColor: 'red' }]}
                placeholder={errors.phone ? "Celular es requerido" : "Celular"}
                placeholderTextColor={errors.phone ? 'red' : '#67635d'}
                keyboardType="phone-pad"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="location"
            defaultValue=""
            rules={{ required: true }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.location && { borderColor: 'red' }]}
                placeholder={errors.location ? "Ubicación es requerida" : "Ubicación"}
                placeholderTextColor={errors.location ? 'red' : '#67635d'}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <Controller
              control={control}
              name="adoption"
              defaultValue={false}
              rules={{ validate: validateCheckboxes }}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  value={value}
                  onValueChange={(newValue) => {
                    onChange(newValue);
                    validateCheckboxes();
                  }}
                  tintColors={{ true: '#E76801', false: '#E76801' }}
                  style={styles.checkbox}
                />
              )}
            />
            <Text style={styles.checkboxLabel}>Adopción</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Controller
              control={control}
              name="transit"
              defaultValue={false}
              rules={{ validate: validateCheckboxes }}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  value={value}
                  onValueChange={(newValue) => {
                    onChange(newValue);
                    validateCheckboxes();
                  }}
                  tintColors={{ true: '#E76801', false: '#E76801' }}
                  style={styles.checkbox}
                />
              )}
            />
            <Text style={styles.checkboxLabel}>Tránsito</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Controller
              control={control}
              name="isShelter"
              defaultValue={false}
              rules={{ validate: validateCheckboxes }}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  value={value}
                  onValueChange={(newValue) => {
                    onChange(newValue);
                    setIsShelter(newValue);
                    validateCheckboxes();
                  }}
                  tintColors={{ true: '#E76801', false: '#E76801' }}
                  style={styles.checkbox}
                />
              )}
            />
            <Text style={styles.checkboxLabel}>Refugio</Text>
          </View>
        </View>
        <View style={styles.shelterErrorText}>
          {checkboxError && <Text style={styles.errorText}>*Al menos una opción debe estar seleccionada</Text>}
        </View>
        {isShelter && (
          <Controller
            control={control}
            name="shelterName"
            defaultValue=""
            rules={{ required: true }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.shelterInputContainer, errors.shelterName && { borderColor: 'red' }]}
                placeholder={errors.shelterName ? "Nombre del refugio es requerido" : "Nombre del refugio"}
                placeholderTextColor={errors.shelterName ? 'red' : '#67635d'}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        <Animated.View style={[styles.registerButton, { backgroundColor: buttonColor }]}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
          >
            <Text style={styles.registerButtonText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInText}>
            ¿Ya tenés una cuenta?{' '}
            <Text style={styles.signInLink}>Iniciá sesión</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator color="#FFF" />
        </View>
      )}
    </View>
  );
};

export default RegistrationScreen;
