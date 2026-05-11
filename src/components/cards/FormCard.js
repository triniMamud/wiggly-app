import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Animated, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles/formCardStyle'

const FormCard = ({ question, totalCards, handleAnswer }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [answer, setAnswer] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(question.items || []);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const additionalInfoAnim = useRef(new Animated.Value(0)).current;
  const [photos, setPhotos] = useState([]);
  const [colorAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  useEffect(() => {
    Animated.timing(additionalInfoAnim, {
      toValue: showAdditionalInfo ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start(); 
  }, [showAdditionalInfo]);

  useEffect(() => {
    setItems(question.items)
  }, []);

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: (answer.trim() === '' || answer === "Yes") ? 0 : 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [answer]);

  const buttonColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ccc', '#FDA769'],
  });


  const handleButtonPress = (value) => {
    setAnswer(value);
    if (value  === 'Yes' && (question.index === 1 || question.index === 3)) {
      setShowAdditionalInfo(true);
    } else {
      Animated.timing(animatedValue, {
        toValue: 500,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setShowAdditionalInfo(false);
        handleAnswer(question, value)
      });
    }
  };

  const handleSelectChange = (itemValue) => {
    setAnswer(itemValue);
    handleButtonPress(itemValue);
  };

  const handleImagePicker = () => {
    ImagePicker.openPicker({ cropping: true, multiple: true })
      .then(images => {
        setPhotos(images.map((img) => img.path));
      })      
      .catch((error) => console.log('Image Picker Error:', error));
  };

  const handleDeletePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  return (
    <Animated.View style={[styles.cardContainer, { transform: [{ translateX: animatedValue }] }]}>
      <Text style={styles.cardNumber}>
        {question.index} de {totalCards}
      </Text>

      <Text style={styles.question}>{question.question}</Text>

      {/* YES/NO */}
      {question.answerType === 'yesno' && !showAdditionalInfo && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonYes} onPress={() => handleButtonPress('Yes')}>
            <Text style={styles.buttonText}>Si</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNo} onPress={() => handleButtonPress('No')}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* YES + INFO EXTRA */}
      {(showAdditionalInfo && question.index !== 17) &&
        <Animated.View style={[styles.additionalInfoContainer, { opacity: additionalInfoAnim }]}>
          <View style={styles.additionalButtonContainer}>
            <Text style={styles.buttonText}>Si</Text>
          </View>
          <View style={styles.moreInfoContainer}>
            <TextInput 
              placeholder={question.extendedPlaceholder} 
              style={[styles.input, styles.placeholder]} 
              placeholderTextColor="rgba(0,0,0,0.4)" 
              multiline={true}
              onChangeText={(text) => setAnswer(text)} 
              keyboardType={question.numeric ? 'numeric' : 'default'} 
            />
            <Animated.View style={[styles.nextButton, { backgroundColor: buttonColor }]}>
              <TouchableOpacity
                onPress={() => handleButtonPress(answer)}
                disabled={answer.trim() === ''}
              >
                <Text style={styles.nextButtonText}>Siguiente</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>}

      {/* INPUT */}
      {question.answerType === 'input' && (
        <View style={styles.moreInfoContainer}>
          <TextInput 
            placeholder={question.extendedPlaceholder} 
            multiline
            style={styles.input} 
            placeholderTextColor="rgba(0,0,0,0.4)"
            onChangeText={(text) => setAnswer(text)} 
            keyboardType={question.numeric ? 'numeric' : 'default'} 
          />
          <Animated.View style={[styles.button, { backgroundColor: buttonColor }]}>
            <TouchableOpacity
              onPress={() => handleButtonPress(answer)}
              disabled={answer.trim() === ''}
            >
              <Text style={styles.buttonTextNext}>Siguiente</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}

      {/* SELECT */}  
      {question.answerType === 'select' && (
        <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecciona una opción"
          placeholderStyle={styles.placeholder}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainerStyle}
          onChangeValue={handleSelectChange}
        />
      </View>
      )}

      {/* PHOTO */}
      {question.answerType === 'photo' && (
        <View style={styles.photoSection}>
          <Text style={styles.photoSubtitle}>
            No es necesario, pero podría agilizar el proceso de adopción
          </Text>

          {photos.length === 0 ? (
            <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
              <Text style={styles.buttonText}>Subir foto</Text>
            </TouchableOpacity>
          ) : (
            <>
              <ScrollView
                style={styles.photosScroll}
                contentContainerStyle={styles.photosScrollContent}
                showsVerticalScrollIndicator={false}
              >
                {photos.map((photo, index) => (
                  <View key={index} style={styles.photoWrapper}>
                    <Image source={{ uri: photo }} style={styles.photo} />
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDeletePhoto(index)}
                    >
                      <Text style={styles.deleteButtonText}>✕</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
              <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
                <Text style={styles.buttonText}>Agregar más</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity
            style={styles.nextButtonFull}
            onPress={() => handleButtonPress(answer)}
          >
            <Text style={styles.nextButtonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

export default FormCard;
