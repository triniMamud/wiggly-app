import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/homeCardStyle'
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';


const HomeCard = ({ pet, onToggleFav }) => {
  const [isFavorite, setIsFavorite] = useState(pet.pet.isFavPet);
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);

  const openPetDetailScreen = () => {
    navigation.navigate('PetDetailScreen', { pet });
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFav(pet.id);
  };

  const renderImage = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item }}
        />
      </View>
    );
  };

  /*
    {pet.images && pet.images.length > 0 && (
    <Image style={styles.image} source={{ uri: pet.images[currentSlideIndex] }} />
    )}
  */

  return (
    <View style={styles.card}>
      <Carousel
        data={pet.images}
        renderItem={renderImage}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <TouchableOpacity style={styles.favoriteIcon} onPress={handleToggleFavorite}>
        <Icon 
          name={isFavorite ? "favorite" : "favorite-border"} 
          size={24} 
          color="#E76801" 
        />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openPetDetailScreen}>
          <Text style={styles.buttonText}>Conocé más</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{pet.pet.name}</Text>
          <View style={styles.genderContainer}>
            <Icon name={pet.pet.gender === 'Macho' ? 'male' : 'female'} size={26} color="#FDA769" />
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Icon name="place" size={16} color="#FDA769" />
          <Text style={styles.location}>{pet.pet.location}</Text>
        </View>
        <View style={styles.ageContainer}>
          <Icon name="cake" size={16} color="#FDA769" />
          <Text style={styles.age}>{pet.pet.age} {pet.pet.age === 1 ? 'año' : 'años'}</Text>
        </View>

      </View>
      
    </View>
  );
};

export default HomeCard;
