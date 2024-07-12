import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F4EE',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E76801',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#E76801',
    borderRadius: 10,
    backgroundColor: '#FDF8F3',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  checkboxLabel: {
    marginHorizontal: 10,
    color: '#E76801',
  },
  registerButton: {
    backgroundColor: '#E76801',
    padding: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 100
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  signInText: {
    color: '#000',
    marginTop: 20,
  },
  signInLink: {
    color: '#E76801',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
