import React, { useState, useEffect } from 'react';
import {View, FlatList, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';
import apiClient from '../api/apiClient';
import HomeCard from '../components/HomeCard';
import styles from './styles/homeScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';


const HomeTab = ({ navigation }) => {

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    getAllPets();
  }, []);*/

  const getAllPets = async () => {

    const data = [
      {
        pet: {
          images: [
            'https://m.media-amazon.com/images/M/MV5BNjcyNjQyODQzNV5BMl5BanBnXkFtZTgwMDg0ODQ3MDE@._V1_SX300.jpg',
            'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
          ],
          pet: {
            id: 1,
            name: 'pepito',
            type: 'DOG',
            age: 4,
            gender: 'Hembra',
            size: 'chico',
            location: 'nuñez',
            is_castrated: true,
            vaccines: 'si, todas',
            deparasited: 'si, al dia',
            illnessesAndTreatments: 'ninguno',
            medicalInfo: 'todo en orden',
            generalInfo: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
            goodWithPets: 'si',
            goodWithChildren: 'si',
            beOnItsOwn: true,
            bathroomOutside: "SOMETIMES",
            isFavPet: true
          }
        }
      },
      {
        pet: {
          images: [
            'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
            'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
          ],
          pet: {
            id: 1,
            name: 'OTRO',
            type: 'CAT',
            age: 1,
            gender: 'Macho',
            size: 'chico',
            location: 'nuñez',
            is_castrated: true,
            vaccines: 'si, todas',
            deparasited: 'si, al dia',
            illnessesAndTreatments: 'ninguno',
            medicalInfo: 'todo en orden',
            generalInfo: 'es re buenito',
            goodWithPets: 'si',
            goodWithChildren: 'si',
            beOnItsOwn: true,
            bathroomOutside: 2,
            isFavPet: false
          }
        }
      },
      {
        pet: {
          images: [
            'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
          ],
          pet: {
            id: 1,
            name: 'otro pepito',
            type: 'DOG',
            age: 4,
            gender: 'Macho',
            size: 'chico',
            location: 'villa dominico',
            is_castrated: true,
            vaccines: 'si, todas',
            deparasited: 'si, al dia',
            illnessesAndTreatments: 'ninguno',
            medicalInfo: 'todo en orden',
            generalInfo: 'es re buenito',
            goodWithPets: 'si',
            goodWithChildren: 'si',
            beOnItsOwn: true,
            bathroomOutside: 2,
            isFavPet: false
          }
        }
        
      },
    ];

    setPets(data);
    setLoading(false);
  /*try {
      const response = await apiClient.get('/pets');
      setPets(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }*/
  };

  useEffect(() => {
    getAllPets();
  }, []);

  const toggleFav = (petId) => {
    // Handle toggling favorite status here
  };


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FDA769" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person" size={30} color="#E76801" />
        <Text style={styles.headerTitle}>Pepito</Text>
        <Icon name="settings" size={30} color="#E76801" />
      </View>
      <FlatList
        data={pets}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <HomeCard pet={item.pet} images={item.pet.images} onToggleFav={toggleFav} />
          </View>
        )}
        keyExtractor={(item) => item.pet.pet.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default HomeTab;