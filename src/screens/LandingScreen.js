import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import styles from './styles/landingScreenStyles';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo_naranja.png')}
          />
        </View>
        <View style={styles.titleContainer}>
          <Image
            style={styles.titleImage}
            source={require('../../assets/texto_negro.png')}
          />
        </View>
        <Text style={styles.subtitleText}>La app que une corazones</Text>
        <View style={styles.imageCircle}>
          <Image
            style={styles.mainImage}
            source={require('../../assets/perro_lentes_corazones.png')}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.primaryButtonText}>EMPEZAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.secondaryButtonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
