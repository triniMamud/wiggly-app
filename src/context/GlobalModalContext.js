// GlobalModalContext.js
import React, { createContext, useState, useContext } from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const GlobalModalContext = createContext();

export const GlobalModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalImage, setModalImage] = useState(null);
  const [onCloseCallback, setOnCloseCallback] = useState(null);

  const showModal = (title, message, image, onClose) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalImage(image);
    setOnCloseCallback(() => onClose);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalTitle('');
    setModalMessage('');
    setModalImage(null);
    if (onCloseCallback) {
      onCloseCallback();
    }
  };

  return (
    <GlobalModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal isVisible={modalVisible} style={styles.modal}>
  <View style={styles.modalContent}>
    {modalImage && <Image source={modalImage} style={styles.modalImage} />}
    <Text style={styles.modalTitle}>{modalTitle}</Text>
    <Text style={styles.modalMessage}>{modalMessage}</Text>
    <TouchableOpacity style={styles.modalButton} onPress={hideModal}>
      <Text style={styles.modalButtonText}>OK</Text>
    </TouchableOpacity>
  </View>
</Modal>
  </GlobalModalContext.Provider>
  );
};

export const useGlobalModal = () => {
  return useContext(GlobalModalContext);
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FDF8F3',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%', // Adjust the width as needed
    maxWidth: 320,
    minHeight: 400, // Adjust the height as needed
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center', // Center the text
  },
  modalMessage: {
    fontSize: 14,
    marginBottom: 20,
    color: 'rgba(0,0,0,0.6)',
    textAlign: 'center', // Center the text
  },
  modalImage: {
    width: 150,
    height: 200,
    marginBottom: 20,
    resizeMode: 'stretch'
  },
  modalButton: {
    width: '80%',
    backgroundColor: '#E76801',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center', // Center the button text
    marginBottom: 5
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Center the button text
  },
});
