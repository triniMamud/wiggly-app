// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MisMascotasScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MisMascotasScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MisMascotasScreen;
