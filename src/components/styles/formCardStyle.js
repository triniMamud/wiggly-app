import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  yesNoButton: {
    backgroundColor: '#FDA769',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropzone: {
    borderColor: '#FDA769',
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default styles;