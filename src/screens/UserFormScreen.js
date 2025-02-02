import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Modal, Text, TouchableOpacity, Image } from 'react-native';
import FormCard from '../components/cards/FormCard';
import confettiAnimation from '../../assets/confetti.gif';
import CongratulationsModal from '../components/modals/CongratulationsModal';


const questions = [
  { question: '¿Permiten mascotas?', answerType: 'yesno', index: 19 },
  { question: '¿Sos propietario/a?', answerType: 'yesno', index: 18 },
  { question: '¿Hay red de contención?', answerType: 'yesno', index: 17 },
  { question: '¿Hay espacios abiertos?', answerType: 'select', extendedPlaceholder: 'Tipo de espacio abierto', index: 16,
    items: [
      { key: 1, label: 'Patio/Jardin', value: 'patio' },
      { key: 2, label: 'Terraza', value: 'terraza' },
      { key: 3, label: 'Balcón', value: 'balcon' },
      { key: 4, label: 'Ninguno', value: 'ninguno' }
    ]
  },
  { question: 'Sube fotos de tu casa', answerType: 'photo', extendedPlaceholder: 'No es necesario, pero podría agilizar el proceso de adopción' , index: 15},
  { question: 'Seleccioná el tipo de hogar donde vivis', answerType: 'select', extendedPlaceholder: 'Tipo de vivienda', index: 14,
    items: [
      { key: 1, label: 'Casa', value: 'casa' },
      { key: 2, label: 'Departamento', value: 'departamento' },
      { key: 3, label: 'PH', value: 'ph'},
      { key: 4, label: 'Otro', value: 'otro' }
    ]
  },
  { question: '¿Con quién se quedaría si tenés que irte de viaje?', answerType: 'input', extendedPlaceholder: '...', numeric: false, index: 13 },
  { question: '¿Estás de acuerdo con que el refugio haga un seguimiento del caso?', answerType: 'yesno', index: 12 },
  { question: 'En caso de que la mascota no esté castrada, ¿podrías comprometerte a hacerlo?', answerType: 'yesno', index: 11 },
  { question: 'Ingresá dónde dormiría', answerType: 'input', extendedPlaceholder: '(en el living, afuera, en la habitación, ...)', numeric: false, index: 10 },
  { question: '¿Cuantas veces saldría a caminar?', answerType: 'input', extendedPlaceholder: '...', numeric: false, index: 9 },
  { question: '¿Cuanto tiempo se quedería solo/a?', answerType: 'input', extendedPlaceholder: '...', numeric: false, index: 8 },
  { question: 'Ingresá cual es tu situación laboral', answerType: 'input', extendedPlaceholder: '...', numeric: false, index: 7 },
  { question: '¿Podrías costear un/a paseador/a de ser necesario?', answerType: 'yesno', index: 6 },
  { question: '¿Podrías costear un/a entrenador/a de ser necesario?', answerType: 'yesno', index: 5 },
  { question: '¿Estás conciente de los gastos que puede implicar una mascota?', answerType: 'yesno', index: 4 },
  { question: '¿Algun menor?', answerType: 'yesno', extendedPlaceholder: 'Ingresa más informacion (edad, si le gustan los perros/gatos, ...)', numeric: false, index: 3 },
  { question: '¿Con cuantas personas viviría?', answerType: 'input', index: 1, extendedPlaceholder: '...', numeric: true, index: 2 },
  { question: '¿Tenés otras mascotas?', answerType: 'yesno', extendedPlaceholder: 'Ingresa más informacion sobre tu mascota', numeric: false, index: 1 }
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
      {questions.map((question, index) => (
        <FormCard
          key={index}
          question={question}
          totalCards={questions.length}
          handleAnswer={handleAnswer}
        />
      ))}
      <CongratulationsModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        confettiAnimation={confettiAnimation}
      />
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
  gif: {
    width: 100,
    height: 100,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
  lottieAnimation: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserFormScreen;
