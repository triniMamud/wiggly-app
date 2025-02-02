import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import LandingScreen from './screens/LandingScreen';
import SignInScreen from './screens/SignInScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { GlobalModalProvider } from './context/GlobalModalContext';
import HomeTab from './screens/HomeTab';
import MisPostulacionesScreen from './screens/MisPostulacionesScreen';
import FavoritosScreen from './screens/FavoritosScreen';
import MisMascotasScreen from './screens/MisMascotasScreen';
import PetDetailScreen from './screens/PetDetailScreen';
import UserFormScreen from './screens/UserFormScreen';
import TabNavigator from './components/TabNavigator';


import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


const Stack = createStackNavigator();


const UserFormScreenWrapper = () => {
  const navigation = useNavigation();
  
  const handleBackToHome = () => {
    navigation.navigate('HomeTab');
  };

  return (
    <UserFormScreen navigation={navigation} style={{backgroundColor: 'rgba(0,0,0,0)'}}>
      <TouchableOpacity onPress={ ()=> navigation.navigate('HomeTab')} >
          <Icon  name="arrow-back" size={24} color="#E76801" style={{ marginLeft: 20 }} />
      </TouchableOpacity>
    </UserFormScreen>
  );
};

const App = () => {
  return (
    <GlobalModalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" 
            options={{ headerShown: false }} component={LandingScreen} />
          <Stack.Screen name="SignIn" options={{headerTitle: 'Iniciar Sesión', headerTintColor: '#E76801',  headerStyle: styles.headerStyle}} component={SignInScreen} />
          <Stack.Screen name="Registration" options={{headerTitle: 'Registrarse', headerTintColor: '#E76801', headerStyle: styles.headerStyle}} component={RegistrationScreen} />
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={TabNavigator} />
          <Stack.Screen name="PetDetailScreen" options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerStyle: styles.headerStyle,
            headerTintColor: '#E76801',}}  component={PetDetailScreen} />
          <Stack.Screen name="UserFormScreen" component={UserFormScreenWrapper} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalModalProvider>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 2,
    width: 24,
    height: 24,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerStyle: {
    backgroundColor: '#FDF8F3',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5, // Elevation for Android
  }
});

export default App;
