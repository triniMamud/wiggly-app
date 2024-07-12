import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width / 2) - 20;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#FDF8F3',
    borderColor: '#FDA769',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
    width: '90%',
    height: 350,
  },
  image: {
    height: 240,
    resizeMode: 'stretch',
    width: cardWidth
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    marginLeft: 5,
    color: '#555',
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  age: {
    marginLeft: 5,
    color: '#555',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: -30
  },
  button: {
    backgroundColor: '#E76801',
    width: '85%',
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default styles;