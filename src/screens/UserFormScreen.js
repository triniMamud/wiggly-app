import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Modal, Text, TouchableOpacity } from 'react-native';
import FormCard from '../components/FormCard';
import DropDownPicker from 'react-native-dropdown-picker';

const questions = [
  { question: '¿Permiten mascotas?', answerType: 'yesno', index: 17},
  { question: '¿Sos propietario/a?', answerType: 'yesno', index: 16},
  //¿Hay red de contención?
  { question: '¿Hay espacios abiertos?', answerType: 'input', index: 15, options: [{value: 'patio', label: 'Patio/Jardín'}, {value: 'terraza', label: 'Terraza'}, {value: 'balcon', label: 'Balcón'}, {value: 'ninguno', label: 'Ninguno'}]},
  { question: 'Arrastra y suelta fotos de tu casa', answerType: 'photo', index: 14 },
  { question: 'Seleccioná el tipo de hogar donde vivis', answerType: 'input', index: 13, options: [{value: 'casa', label: 'Casa'}, {value: 'departamento', label: 'Departamento'}, {value: 'ph', label: 'PH'}, {value: 'otro', label: 'Otro'}]},
  { question: 'Ingresá a cuidado de quien quedaría la mascota en caso de que tengas que viajar', answerType: 'input', index: 12, numeric: false },
  { question: '¿Estás de acuerdo con que el refugio haga un seguimiento del caso?', answerType: 'yesno', index: 11},
  { question: 'En caso de que la mascota no esté castrada, ¿podrías comprometerte a hacerlo?', answerType: 'yesno', index: 10},
  { question: 'Ingresá dónde dormiría', answerType: 'input', index: 9, numeric: false },
  { question: '¿Cuantas veces saldría a caminar?', answerType: 'input', index: 8, numeric: false },
  { question: '¿Cuanto tiempo se quedería solo/a?', answerType: 'input', index: 7, numeric: false },
  { question: 'Ingresá cual es tu situación laboral', answerType: 'input', index: 6, numeric: false },
  { question: '¿Podrías costear un/a paseador/a de ser necesario?', answerType: 'yesno', index: 5},
  { question: '¿Podrías costear un/a entrenador/a de ser necesario?', answerType: 'yesno', index: 4},
  { question: '¿Estás conciente de los gastos que puede implicar una mascota?', answerType: 'yesno', index: 3},
  //Ingresa más informacion (edad, si le gustan los perros/gatos, ...)
  { question: '¿Algún menor?', answerType: 'yesno', index: 2},
  { question: '¿Con cuantas personas viviría?', answerType: 'input', index: 1, numeric: true },
  //Ingresa más informacion sobre tu mascota
  { question: '¿Tenés otras mascotas?', answerType: 'yesno', index: 0 },
];

const UserFormScreen = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => { }, [answers]);

  const handleAnswer = (question, answer) => {
    const updatedAnswers = [...answers, { question: question.question, answer: answer }];
    setAnswers(updatedAnswers);
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < questions.length) {
      const nextQuestion = questions[nextIndex];
      if (nextQuestion.dependentAnswer && nextQuestion.dependentAnswer !== answer) {
        setCurrentQuestionIndex(nextIndex + 1); // Skip dependent question if condition not met
      } else {
        setCurrentQuestionIndex(nextIndex);
      }
    } else if (nextIndex === questions.length) {
      submitForm(updatedAnswers);
    }
  };

  const submitForm = (formData) => {
    console.log('Submitting form:', formData);
   // const url = 'https://your-backend-api.com/submit'; // Replace with your backend URL
    /*fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      Alert.alert('Form Submitted', 'Your answers have been submitted successfully.');
                  setIsModalVisible(true);
    })
    .catch((error) => {
      console.error('Error:', error);
      Alert.alert('Submission Error', 'There was an error submitting your form. Please try again.');
    });*/
    setIsModalVisible(true);

  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate('HomeScreen');
  };


  return (
    <View style={styles.container}>
      {questions.map((question) => (
        <FormCard
          key={question.index}
          question={question}
          totalCards={questions.length}
          handleAnswer={handleAnswer}
        />
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Congratulations!</Text>
            <Text style={styles.modalText}>You have completed the form.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#FDA769',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
  },
});

export default UserFormScreen;
