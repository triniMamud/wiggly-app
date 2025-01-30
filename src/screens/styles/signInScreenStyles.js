import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FDF8F3',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#E76801',
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#787878',
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
    marginTop: 10
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },

  forgotPasswordText: {
    textAlign: 'right',
    color: '#FDA769',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 10,
    width: '48%',
    textDecorationLine: 'underline',
  },
  signInButton: {
    padding: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 150
  },
  signInButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  noAccountText: {
    textAlign: 'center',
    color: '#787878',
    //marginTop: 20
  },
  registerLink: {
    color: '#E76801',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  fpContainer: {
    alignItems: 'flex-end'
  }
});

export default styles;