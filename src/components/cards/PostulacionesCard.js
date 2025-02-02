import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/postulacionesCardStyle'
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import PostulationStatusPipe from '../../pipes/PostulationStatusPipe'


const PostulacionesCard = ({ pet }) => {
  const { width } = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);

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

  const getStatusClass = (value) => {
    switch (value) {
      case 1:
      case 2: return {style: styles.pending, icon: 'clock', label: 'Pendiente'};
      case 3: return {style: styles.accepted, icon: 'smile', label: 'Aprobada'};
      case 4: return {style: styles.declined, icon: 'frown', label: 'Rechazada'};
    }
  };

  const stages = [
    { label: 'Postulación enviada', stage: 1 },
    { label: 'Postulación recibida', stage: 2 },
    { label: 'Postulación revisada', stage: 3 }
  ];

  const getStageProps = (stage) => {
    if (stage < pet.status) {
      return { color: '#FDA769', icon: 'check-circle' }; // Etapa completada
    }
    if (stage === pet.status) {
      return { color: '#E76801', icon: 'task-alt' }; // Etapa actual
    }
    return { color: '#555', icon: 'schedule' }; // Etapa no alcanzada
  };

  const rechazadaCondition = (stage) => {
    return stage === 3 && pet.status === 4;
  } 

  const actualBoldCondition = (stage) => {
    return stage === pet.status || pet.status === 4;
  } 

  const handleCancelPostulation = () => {
    //navigation.navigate('PetDetailScreen', { pet });
  };

  return (
    <View style={styles.card}>
      <View style={styles.halfLeft}>
        <Carousel
          data={pet.images}
          renderItem={renderImage}
          sliderWidth={(width/2)-10}
          itemWidth={(width/2)-10}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{pet.pet.name}</Text>
            <View style={styles.genderContainer}>
              <IconMI name={pet.pet.gender === 'Macho' ? 'male' : 'female'} size={26} color="#FDA769" />
            </View>
          </View>

          <View style={styles.locationContainer}>
            <IconMI name="place" size={16} color="#FDA769" />
            <Text style={styles.location}>{pet.pet.location}</Text>
          </View>
          <View style={styles.ageContainer}>
            <IconMI name="cake" size={16} color="#FDA769" />
            <Text style={styles.age}>{pet.pet.age} {pet.pet.age === 1 ? 'año' : 'años'}</Text>
          </View>
        </View>
      </View>
      <View style={styles.halfRight}>
        <View style={[styles.statusBar, getStatusClass(pet.status).style]}>
          <IconF size={16} name={getStatusClass(pet.status).icon} style={[getStatusClass(pet.status).style ]}/>
          <Text style={[styles.textStatus, getStatusClass(pet.status).style]}>{getStatusClass(pet.status).label}</Text>
        </View>
        <View>
          {stages.map((item) => (
              <View key={item.stage} style={styles.stageContainer}>
                <IconMI 
                  name={rechazadaCondition(item.stage) ? 'task-alt' :getStageProps(item.stage).icon} 
                  size={16} 
                  color={rechazadaCondition(item.stage) ? '#E76801' : getStageProps(item.stage).color} 
                />
                <Text style={[styles.stageText, {
                  color: rechazadaCondition(item.stage) ? '#E76801' : getStageProps(item.stage).color,
                  fontWeight: actualBoldCondition(item.stage) ? 'bold' : '100'
                }]}>
                  {item.label}
                </Text>
              </View>    
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCancelPostulation}>
            <Text style={styles.buttonText}>Cancelar postulación</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
};

export default PostulacionesCard;
