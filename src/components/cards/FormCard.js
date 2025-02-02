import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Animated, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

const FormCard = ({ question, totalCards, handleAnswer }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [answer, setAnswer] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(question.items || []);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const additionalInfoAnim = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);
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
    if (showAdditionalInfo) {
      Animated.timing(additionalInfoAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(additionalInfoAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [showAdditionalInfo, additionalInfoAnim]);

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
    ImagePicker.openPicker({
      cropping: true,
      multiple: true
    }).then(images => {
      const imagePaths = images.map(image => image.path);
      console.log(imagePaths)
      setPhotos(imagePaths);
    }).catch(error => {
      console.log('Image Picker Error: ', error);
    });
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <Animated.View style={[styles.cardContainer, { transform: [{ translateX: animatedValue }] }]}>
      <Text style={styles.cardNumber}>{question.index} de {totalCards}</Text>
      <View style={styles.bottomContainer}>
      <Text style={styles.question}>{question.question}</Text>
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
      {(showAdditionalInfo && question.index !== 17) &&
      <Animated.View style={[styles.additionalInfoContainer, { opacity: additionalInfoAnim }]}>
        <View style={styles.additionalButtonContainer}>
          <Text style={styles.buttonText}>Si</Text>
        </View>
        <View style={styles.moreInfoContainer}>
          <TextInput 
            placeholder={question.extendedPlaceholder} 
            style={[styles.input, styles.placeholder]} 
            placeholderTextColor="rgba(0,0,0,0.6)" 
            multiline={true}
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
      </Animated.View>}
      {question.answerType === 'input' && (
        <View style={styles.moreInfoContainer}>
          <TextInput 
            placeholder={question.extendedPlaceholder} 
            multiline={true}
            style={[styles.input, styles.placeholder]} 
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
      {question.answerType === 'photo' && (
        <View style={{marginBottom:150, marginTop:150}}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>No es necesario, pero podría agilizar el proceso de adopción</Text>
          </View>
          {photos.length == 0 && (
            <TouchableOpacity style={styles.buttonUpload} onPress={handleImagePicker}>
              <Text style={styles.buttonText}>Subir Foto</Text>
            </TouchableOpacity>
          )}
          {photos.length > 0 && (
            <ScrollView style={styles.photosContainer} 
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
              showsVerticalScrollIndicator={false}
            >
              {photos.map((photo, index) => (
                <View key={index} style={styles.photoWrapper}>
                  <Image source={{ uri: photo }} style={styles.photo} />
                  <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeletePhoto(index)}>
                    <Text style={styles.deleteButtonText}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          )}
          <View style={styles.nextButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(answer)}>
              <Text style={styles.buttonTextNext}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FDF8F3',
    padding: 20,
    borderRadius: 30,
    borderColor: '#E76801',
    borderWidth: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    width: '75%',
    height: 400,
    zIndex: 1,
  },
  bottomContainer: {
    alignItems: 'center',
    height: '80%',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20
  },
  moreInfoContainer: {
    width: '100%',
    marginTop: 15,
    //marginBottom: 10,
    height: '100%',
    alignItems:'flex-end',
    justifyContent: 'flex-end'
  },
  subTitleContainer: {
    //marginVertical: 20,
    position: 'absolute',
    bottom: 80,
    right: -100
  },
  subTitle: {
    textAlign: 'center',
  },
  photosContainer: {
    position: 'absolute',
    bottom: -120,
    right: -115,
    width: '100%',
    height: 190
  },
  photoWrapper: {
    position: 'relative',
    marginRight: 10,
    marginTop: 10
  },
  photo: {
    width: 85,
    height: 85,
    borderRadius: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#E76801',
    borderRadius: 15,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center'
  },
  additionalInfoContainer: {
    width: '100%',
    alignItems: 'center', 
    height: '80%',
    opacity: 0,
    justifyContent: 'space-between',
    marginBottom:40
  },
  additionalButtonContainer: {
    backgroundColor: '#E76801',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop:20,
    marginBottom: -25,
    width: 75
  },
  nextButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    position: 'absolute',
    left: -105,
    top: 125
    //height: 50
  },
  dropdownContainer: {
    width: '100%',
    marginVertical: 10,
  },
  placeholder: {
    fontSize: 12,
    textAlignVertical: 'top',
    flexWrap: 'wrap'
  },
  dropdown: {
    borderColor: '#FDA769',
    borderRadius: 5,
    backgroundColor: '#FDF8F3',
  },
  dropdownContainerStyle: {
    borderColor: '#FDA769',
    backgroundColor: '#FDF8F3',
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonNo: {
    backgroundColor: '#FDA769',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FDA769',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    width: '30%',
    fontSize: 10,
    alignItems: 'center',
    marginBottom: 5
  },
  buttonUpload: {
    backgroundColor: '#FDA769',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: '60%',
    fontSize: 10,
    alignItems: 'center',
    alignSelf: 'center',
    bottom: -20,
    position: 'absolute'
  },
  buttonTextNext: {
    color: 'white',
    fontSize: 10
  },
  buttonYes: {
    backgroundColor: '#E76801',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#FDA769',
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '5%',
    width: '100%',
    height: '70%',
    textAlign: 'left'
  },
  numberInput: {
    borderWidth: 1,
    borderColor: '#FDA769',
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '5%',
    width: '100%',
    height: '70%',
    textAlign: 'left',
  },
  cardNumber: {
    marginTop: 10,
    marginBottom: 10,
    color: 'rgba(0,0,0,0.5)',
    fontSize: 16
  },
});

export default FormCard;
