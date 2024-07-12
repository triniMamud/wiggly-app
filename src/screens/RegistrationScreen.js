import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';
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

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>CREAR UNA CUENTA</Text>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          rules={{ required: 'Nombre completo es requerido' }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.name && { borderColor: 'red' }]}
              placeholder="Nombre completo"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
        <Controller
          control={control}
          name="lastName"
          defaultValue=""
          rules={{ required: 'Apellido es requerido' }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.lastName && { borderColor: 'red' }]}
              placeholder="Apellido"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName.message}</Text>}
        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{ required: 'Email es requerido' }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.email && { borderColor: 'red' }]}
              placeholder="Email"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        <View style={styles.passwordContainer}>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{ required: 'Contraseña es requerida' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, errors.password && { borderColor: 'red' }]}
                placeholder="Contraseña"
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
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        <View style={styles.row}>
          <Controller
            control={control}
            name="age"
            defaultValue=""
            rules={{ required: 'Edad es requerida' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.age && { borderColor: 'red' }]}
                placeholder="Edad"
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
            rules={{ required: 'DNI es requerido' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.dni && { borderColor: 'red' }]}
                placeholder="DNI"
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.age && <Text style={styles.errorText}>{errors.age.message}</Text>}
        {errors.dni && <Text style={styles.errorText}>{errors.dni.message}</Text>}
        <View style={styles.row}>
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            rules={{ required: 'Celular es requerido' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.phone && { borderColor: 'red' }]}
                placeholder="Celular"
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
            rules={{ required: 'Ubicación es requerida' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, styles.halfInput, errors.location && { borderColor: 'red' }]}
                placeholder="Ubicación"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
        {errors.location && <Text style={styles.errorText}>{errors.location.message}</Text>}
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
            <Text style={styles.checkboxLabel}>Transito</Text>
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
        {checkboxError && <Text style={styles.errorText}>Al menos una opción debe estar seleccionada</Text>}
        {isShelter && (
          <Controller
            control={control}
            name="shelterName"
            defaultValue=""
            rules={{ required: 'Nombre del refugio es requerido si selecciona Refugio' }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, errors.shelterName && { borderColor: 'red' }]}
                placeholder="Nombre del refugio"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {isShelter && errors.shelterName && <Text style={styles.errorText}>{errors.shelterName.message}</Text>}
        <TouchableOpacity
          style={[styles.registerButton, !isValid && { backgroundColor: '#787878' }]}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
        <Text style={styles.registerButtonText}>REGISTRARSE</Text>
        </TouchableOpacity>
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
