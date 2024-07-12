import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Animated } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const FormCard = ({ question, totalCards, handleAnswer }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [answer, setAnswer] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(question.options || []);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const additionalInfoAnim = useRef(new Animated.Value(0)).current;


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

  const handleButtonPress = (value) => {
    setAnswer(value);
    console.log("answer: " + answer + ", " + value)
    if (value  === 'Yes') {
      setShowAdditionalInfo(true);
    } else {
      Animated.timing(animatedValue, {
        toValue: 500, // Adjust the value to control the slide animation
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
    }).then(image => {
      handleButtonPress(image.path);
    }).catch(error => {
      console.log('Image Picker Error: ', error);
    });
  };

  return (
    <Animated.View style={[styles.cardContainer, { transform: [{ translateX: animatedValue }] }]}>
      <Text style={styles.cardNumber}>{question.index +1} de {totalCards}</Text>
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
      {showAdditionalInfo &&
      <Animated.View style={[styles.additionalInfoContainer, { opacity: additionalInfoAnim }]}>
        <View style={styles.additionalButtonContainer}>
          <Text style={styles.buttonText}>Si</Text>
        </View>
        <View style={styles.moreInfoContainer}>
          <TextInput placeholder='Ingresa más informacion sobre tu mascota' placeholderStyle={styles.placeholder} style={styles.input} onChangeText={setAnswer} keyboardType={question.numeric ? 'numeric' : 'default'}/>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(answer)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>}
      {question.answerType === 'input' && (
        <View>
          <TextInput style={styles.input} onChangeText={setAnswer} keyboardType={question.numeric ? 'numeric' : 'default'}/>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(answer)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
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
        <View>
          <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
            <Text style={styles.buttonText}>Upload Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(answer)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
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
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '75%',
    height: 400,
    //elevation: 1,
    zIndex: 1,
  //  backgroundColor: 'green'
  },
  bottomContainer: {
    alignItems: 'center',
    height: '60%',
    width: '100%',
   // backgroundColor: 'red',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 50
  },
  moreInfoContainer: {
    width: '100%',
    marginTop: 10,
    height: '80%'
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000000'
  },
  additionalInfoContainer: {
    width: '100%',
    alignItems: 'center', 
    height: 190,
    opacity: 0,
    justifyContent: 'space-between'
  },
  additionalButtonContainer: {
    backgroundColor: '#E76801',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    //marginBottom: 40,
    width: 75
  },
  dropdownContainer: {
    width: '100%',
    marginVertical: 10,
  },
  placeholder: {
    color: 'blue',
  },
  dropdown: {
    borderColor: 'red',
    borderRadius: 5,
  },
  dropdownContainerStyle: {
    borderColor: 'green',
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
    //padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    height: '70%'
  },
  cardNumber: {
    marginTop: 10,
    color: 'rgba(0,0,0,0.7)',
  },
});

export default FormCard;
