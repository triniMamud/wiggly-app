import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: Dimensions.get('window').width * 0.8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FDA769',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#E76801',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 30,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;