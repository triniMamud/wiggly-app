// PetDetailScreen.js
import React, { useState, useMemo, useRef, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles/petDetailScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet from '@gorhom/bottom-sheet';
import axios from 'axios';
import { useGlobalModal } from '../context/GlobalModalContext';


const PetDetailScreen = ({ route, navigation }) => {
  const { pet } = route.params;
  const [isFavorite, setIsFavorite] = useState(pet.pet.isFavPet);
  const [activeSlide, setActiveSlide] = useState(0);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const { width } = Dimensions.get('window');
  const { showModal } = useGlobalModal();
  const [isLoading, setIsLoading] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['40%', '70%'], []);

  const formulateSentencePetBathroom = () => {
    let sentence = "";
    if (pet.pet.bathroomOutside === "YES") sentence = "Sabe ir al baño afuera";
    else if (pet.pet.bathroomOutside === "NO") sentence = "No sabe ir al baño afuera";
    else if (pet.pet.bathroomOutside === "SOMETIMES") sentence = "A veces va al baño afuera, está aprendiendo";
    return sentence;
  };

  const formulateSentencePetGoodWithChildrenAndPets = () => {
    let sentence = pet.pet.goodWithChildren === "Si" ? "" : "No ";
    sentence += "se lleva bien con niños, y ";
    sentence += pet.pet.goodWithPets !== "Si" ? pet.pet.goodWithPets : "";
    sentence += " se lleva bien con otras mascotas.";
    return sentence;
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

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
   // onToggleFav(pet.id);
  };

  const handlePostularse = () => {
    //setIsLoading(true);
    setIsLoading(false);
          showModal(
            '¡Necesitamos más información!',
            'Antes de postularte, necesitamos que completes un formulario. Esto es por única vez, y será compartido con el refugio donde se encuentre la mascota que elegiste.',
            require('../../assets/adobeStock_599085812.png'), // Add your image path here
            openUserForm 
          );
    /*axios.get('YOUR_API_ENDPOINT/user/isFormAnswered')
      .then(response => {
        const isFormAnswered = response.data;
        if (!isFormAnswered) {
          setIsLoading(false);
          showModal(
            '¡Necesitamos más información!',
            'Antes de postularte, necesitamos que completes un formulario. Esto es por única vez, y será compartido con el refugio donde se encuentre la mascota que elegiste.',
            require('../../assets/zeke.jpeg') // Add your image path here
          );
        } else {
          axios.post(`YOUR_API_ENDPOINT/pet/${pet.id}/postulate`)
            .then(() => {
              setIsLoading(false);
              refreshPostulaciones();
              showModal(
                '¡Felicidades!',
                'La postulación fue éxitosa. Podrás seguir su estado desde la pestaña de Adopciones',
                require('../../assets/zeke.jpeg') // Add your image path here
              );
            })
            .catch(error => {
              setIsLoading(false);
              showModal(
                'Error',
                error.response.data.message,
                require('../../assets/zeke.jpeg') // Add your image path here
              );
            });
        }
      })
      .catch(error => {
        setIsLoading(false);
        showModal(
          'Error',
          error.response.data.message,
          require('../../assets/zeke.jpeg') // Add your image path here
        );
      });*/
  };

  const openUserForm = () => {
    navigation.navigate('UserFormScreen');
  };

  const refreshPostulaciones = () => {
    // Implement the logic to refresh the postulaciones
  };

  const handleBottomSheetChange = useCallback((index) => {
    setBottomSheetIndex(index);
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        data={pet.images}
        renderItem={renderImage}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <BottomSheet 
        reduceMotion={false}
        style={styles.bottomSheet}   
        onChange={handleBottomSheetChange}      
        handleIndicatorStyle={styles.handleIndicatorStyle}
        ref={bottomSheetRef} 
        index={0} 
        snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{pet.pet.name}</Text>
              <TouchableOpacity style={styles.favoriteIcon} onPress={handleToggleFavorite}>
                <Icon size={24} color="#E76801" 
                  name={isFavorite ? "favorite" : "favorite-border"} 
                />
              </TouchableOpacity>
            </View>
            <View style={styles.petAttributesContainer}>
              <View style={styles.petAttribute}>
                <View style={styles.petAttributeTextContainer}>
                  <Text style={styles.petAttributeText}>{pet.pet.location}</Text>
                </View>
                <Text style={styles.petAttributeLabel}>Ubicación</Text>
              </View>
              <View style={styles.petAttribute}>
                <View style={styles.petAttributeTextContainer}>
                  <Text style={styles.petAttributeText}>{pet.pet.age} {pet.pet.age === 1 ? 'año' : 'años'}</Text>
                </View>
                <Text style={styles.petAttributeLabel}>Edad</Text>
              </View>
              <View style={styles.petAttribute}>
              <View style={styles.petAttributeTextContainer}>
                <Text style={styles.petAttributeText}>{pet.pet.gender}</Text>
              </View>
                <Text style={styles.petAttributeLabel}>Género</Text>
              </View>
              <View style={styles.petAttribute}>
              <View style={styles.petAttributeTextContainer}>
                <Text style={styles.petAttributeText}>{pet.pet.size}</Text>
              </View>
                <Text style={styles.petAttributeLabel}>Tamaño</Text>
              </View>
            </View>
            <View style={styles.refugioContainer}>
              <Icon name="person" size={30} color="#E76801" />
              <Text style={styles.refugioText}>Los hermanos paticorti</Text>
            </View>
          </View>
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}> 
              <Text style={styles.detailText}>{formulateSentencePetBathroom()}</Text>
              <Text style={styles.detailText}>{formulateSentencePetGoodWithChildrenAndPets()}</Text>
              <Text style={styles.detailText}>{pet.pet.generalInfo}</Text>   
          </ScrollView>
          <View style={styles.fadeContainer}>
            {bottomSheetIndex < snapPoints.length - 1 && (
              <LinearGradient
                colors={['rgba(255,255,255,0)', 'white']}
                style={styles.gradientOverlay}
              />
            )}
          </View>
        </View>
      </BottomSheet>
      <TouchableOpacity style={styles.button} onPress={handlePostularse}>
        <Text style={styles.buttonText}>Postularse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PetDetailScreen;
