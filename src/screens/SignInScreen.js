import React, { useState, useContext } from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';
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
      <Text style={styles.headerText}>Bienvenido devuelta!</Text>
      <Text style={styles.subHeaderText}>Por favor, ingresá tus datos para poder continuar</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{ required: 'Email es requerido' }}
        render={({ field: { onChange, value } }) => (
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
      <TouchableOpacity
        style={[styles.signInButton, !isValid && { backgroundColor: '#787878' }]}
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        <Text style={styles.signInButtonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>
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
