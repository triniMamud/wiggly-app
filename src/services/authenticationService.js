import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../api/apiClient';

class AuthenticationService {
  constructor() {
    this.user = null;
    this.getUser();
  }

  async register(data) {
    const body = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
      dni: data.dni,
      phone: data.phone,
      location: data.location,
      adoptionType: data.adoptionType,
      isShelter: data.isShelter,
      shelterName: data.shelterName,
    };

    const headers = {
      'Content-Type': 'application/json',
      password: data.password,
    };

    try {
      const response = await axios.post(
        apiClient.defaults.baseURL + '/register',
        body,
        {headers},
      );
      const kCloackUser = {
        name: response.data.name,
        email: response.data.email,
        formAnswered: response.data.formAnswered,
      };

      await AsyncStorage.setItem('user', JSON.stringify(kCloackUser));
      this.user = kCloackUser;

      return kCloackUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async login(email, password) {
    const headers = {
      'Content-Type': 'application/json',
      email,
      password,
    };

    try {
      const response = await axios.post(
        apiClient.defaults.baseURL + '/login',
        null,
        {headers},
      );
      const kCloackUser = {
        name: response.data.name,
        email: response.data.email,
        formAnswered: response.data.formAnswered,
        adoptionType: response.data.adoptionType,
      };

      await AsyncStorage.setItem('user', JSON.stringify(kCloackUser));
      this.user = kCloackUser;

      return kCloackUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUser() {
    try {
      const userStorage = await AsyncStorage.getItem('user');
      this.user = userStorage
        ? JSON.parse(userStorage)
        : await AsyncStorage.getItem('userEmail');
      return this.user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new AuthenticationService();
