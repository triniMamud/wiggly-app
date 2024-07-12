import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FDF8F3',
    padding: 20,
  },
  firstContainer: {
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  imageCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E1D7F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  mainImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#E76801',
  },
  secondaryButton: {
    backgroundColor: '#FDF8F3',
    borderColor: '#E76801',
    borderWidth: 1,
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#E76801',
  },
});

export default styles;
