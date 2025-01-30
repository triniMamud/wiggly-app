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
    //marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  titleContainer: {
    //marginBottom: 20,
    alignItems: 'center',
  },
  titleImage: {
    width: 200,
    height: 100,
    marginBottom: -15
  },
  subtitleText: {
    fontSize: 16,
    color: '#888',
    //marginBottom: 10,
    textAlign: 'center'
  },
  imageCircle: {
    width: 260,
    height: 260,
    borderRadius: 200,
    backgroundColor: '#E1D7F0',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    marginTop: '20%',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    //borderRadius: 150,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200
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
