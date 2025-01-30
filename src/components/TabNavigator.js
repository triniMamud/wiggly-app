import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolateColor } from 'react-native-reanimated';
import HomeTab from '../screens/HomeTab';
import MisPostulacionesScreen from '../screens/MisPostulacionesScreen';
import FavoritosScreen from '../screens/FavoritosScreen';
import MisMascotasScreen from '../screens/MisMascotasScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ source, isFocused }) => {
  const color = useSharedValue(isFocused ? 1 : 0); // 1 for focused, 0 for unfocused

  useEffect(() => {
    color.value = withTiming(isFocused ? 1 : 0, { duration: 300 });
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    tintColor: interpolateColor(color.value, [0, 1], ['#000', '#E76801']),
  }));

  return (
    <Animated.Image source={source} style={[{ width: 24, height: 24 }, animatedStyle]} />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let iconLabel;

          if (route.name === 'HomeTab') {
            iconSource = require('../../assets/home_icon.png');
            iconLabel = 'Inicio';
          } else if (route.name === 'MisPostulacionesScreen') {
            iconSource = require('../../assets/animal_shelter.png');
            iconLabel = 'Postulaciones';
          } else if (route.name === 'FavoritosScreen') {
            iconSource = require('../../assets/heart_dog.png');
            iconLabel = 'Favoritos';
          } else if (route.name === 'MisMascotasScreen') {
            iconSource = require('../../assets/human_pet.png');
            iconLabel = 'Mis Mascotas';
          }       

          return (
            <View style={styles.tabItem}>
              <CustomTabBarIcon source={iconSource} isFocused={focused} />
              {focused && <Text style={{ color: '#E76801', fontSize: 10 }}>{iconLabel}</Text>}
            </View>
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="HomeTab" options={{ headerShown: false }} component={HomeTab} />
      <Tab.Screen name="MisPostulacionesScreen" options={{ headerShown: false }} component={MisPostulacionesScreen} />
      <Tab.Screen name="FavoritosScreen" options={{ headerShown: false }} component={FavoritosScreen} />
      <Tab.Screen name="MisMascotasScreen" options={{ headerShown: false }} component={MisMascotasScreen} />
    </Tab.Navigator>
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
  },
  animatedIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLabel: {
    color: '#E76801',
    fontSize: 10,
  }
});

export default TabNavigator;