// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const MisPostulacionesScreen = () => {
  return (
    
    <View style={styles.container}>
            <View style={styles.header}>
        <Icon name="person" size={30} color="#E76801" />
        <Text style={styles.headerTitle}>Pepito</Text>
        <Icon name="settings" size={30} color="#E76801" />
      </View>
      <Text>MisPostulacionesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FDF8F3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.40,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FDA769'
  },
});

export default MisPostulacionesScreen;
