import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from './screens/LandingScreen';
import SignInScreen from './screens/SignInScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { GlobalModalProvider } from './context/GlobalModalContext';
import HomeScreen from './screens/HomeScreen';
import MisPostulacionesScreen from './screens/MisPostulacionesScreen';
import FavoritosScreen from './screens/FavoritosScreen';
import MisMascotasScreen from './screens/MisMascotasScreen';
import PetDetailScreen from './screens/PetDetailScreen';
import UserFormScreen from './screens/UserFormScreen';

import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UserFormScreenWrapper = () => {
  const navigation = useNavigation();
  const handleBackToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <UserFormScreen navigation={navigation}>
      <TouchableOpacity onPress={ ()=> navigation.navigate('HomeScreen')}>
          <Icon  name="arrow-back" size={24} color="#E76801" style={{ marginLeft: 20 }} />
      </TouchableOpacity>
    </UserFormScreen>
  );
};

const CustomTabBarIcon = ({ source, color, isFocused }) => {
  const scale = useSharedValue(isFocused ? 1.2 : 1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 300 }) }],
    };
  });

  return (
    <Animated.View style={[styles.iconContainer, animatedStyle]}>
      <Image source={source} style={[styles.icon, { tintColor: color }]} />
    </Animated.View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let iconLabel;

          if (route.name === 'HomeScreen') {
            iconSource = require('../assets/home-icon.png');
            iconLabel = 'Inicio';
          } else if (route.name === 'MisPostulacionesScreen') {
            iconSource = require('../assets/animal-shelter.png');
            iconLabel = 'Postulaciones';
          } else if (route.name === 'FavoritosScreen') {
            iconSource = require('../assets/heart-dog.png');
            iconLabel = 'Favoritos';
          } else if (route.name === 'MisMascotasScreen') {
            iconSource = require('../assets/human-pet.png');
            iconLabel = 'Mis Mascotas';
          }       

          return (
            <View style={styles.tabItem}>
              <CustomTabBarIcon source={iconSource} color={focused ? '#E76801' : '#000'} />
              {focused && <Text style={{ color: '#E76801' }}>{iconLabel}</Text>}
            </View>
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="MisPostulacionesScreen" component={MisPostulacionesScreen} />
      <Tab.Screen name="FavoritosScreen" component={FavoritosScreen} />
      <Tab.Screen name="MisMascotasScreen" component={MisMascotasScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <GlobalModalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserFormScreen">
          
          <Stack.Screen name="Landing" 
            options={{ headerShown: false }} component={LandingScreen} />
          <Stack.Screen name="SignIn" options={{headerTitle: 'Iniciar Sesión', headerTintColor: '#E76801',  headerStyle: {backgroundColor: '#FDF8F3'}}} component={SignInScreen} />
          <Stack.Screen name="Registration" options={{headerTitle: 'Registrarse', headerTintColor: '#E76801'}} component={RegistrationScreen} />
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={TabNavigator} />
          <Stack.Screen name="PetDetailScreen" options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#FDF8F3',
              shadowColor: '#000', // Shadow color
              shadowOffset: { width: 0, height: 2 }, // Shadow offset
              shadowOpacity: 0.25, // Shadow opacity
              shadowRadius: 3.84, // Shadow radius
              elevation: 5, // Elevation for Android
            },
            headerTintColor: '#E76801',}}  component={PetDetailScreen} />
          <Stack.Screen
            name="UserFormScreen"
            component={UserFormScreenWrapper}
            options={{ headerShown: false }}
          />
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
});

export default App;
