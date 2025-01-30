import React, { useState, useContext, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Animated} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/signInScreenStyles'
import { useGlobalModal } from '../context/GlobalModalContext';
import authenticationService from '../services/authenticationService';

const SignInScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { showModal } = useGlobalModal();
  const [colorAnim] = useState(new Animated.Value(0));


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

  const onSubmit = async data => {
   // setIsLoading(true);
    /*try {
      const user = await authenticationService.login(data.email, data.password);
      if (!user) {
        showModal('Error', 'Usuario o contraseña incorrectos', null);
        setIsLoading(false);
        return;
      }
      navigation.navigate('HomeScreen');
    } catch (error) {
      showModal('Error', 'Usuario o contraseña incorrectos', null);
    } finally {
      setIsLoading(false);
    }*/      navigation.navigate('HomeScreen');

  };



  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>¡Bienvenido devuelta!</Text>
      <Text style={styles.subHeaderText}>Por favor, ingresá tus datos para poder continuar</Text>
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
            rules={{ required: true }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={[styles.input, errors.password && { borderColor: 'red' }]}
                placeholder={errors.password ? 'Contraseña es requerida' : "Contraseña"}
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
      <View style={styles.fpContainer} >
        <Text
          style={styles.forgotPasswordText}
          onPress={() => navigation.navigate('ForgotPassword')}
        >¿Olvidaste tu contraseña?
        </Text>
      </View>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#E76801"
          style={{ marginVertical: 20 }}
        />
      )}
      <Animated.View style={[styles.signInButton, { backgroundColor: buttonColor }]}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          <Text style={styles.signInButtonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </Animated.View>

      <Text style={styles.noAccountText}>
        ¿No tenés una cuenta?{' '}
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Registration')}>
          Registrate
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;
