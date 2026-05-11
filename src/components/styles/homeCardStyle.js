import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';

const { width } = Dimensions.get('window');
const cardWidth = (width / 2) - scale(18);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: scale(10),
    borderRadius: scale(15),
    backgroundColor: '#FDF8F3',
    borderColor: '#FDA769',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: scale(5),
    elevation: 2,
    overflow: 'hidden',
    width: '90%',
    height: verticalScale(350),
  },
  image: {
    height: verticalScale(240),
    resizeMode: 'cover', 
    width: cardWidth
  },
  favoriteIcon: {
    position: 'absolute',
    top: scale(10),
    right: scale(10),
  },
  detailsContainer: {
    paddingHorizontal: scale(10),
    paddingBottom: scale(10),
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
  },
  location: {
    marginLeft: scale(5),
    color: '#555',
    fontSize: moderateScale(13),
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
  },
  age: {
    marginLeft: scale(5),
    color: '#555',
    fontSize: moderateScale(13),
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: scale(-30),
  },
  button: {
    backgroundColor: '#E76801',
    width: '85%',
    paddingVertical: scale(7),
    paddingHorizontal: scale(10),
    marginVertical: scale(10),
    borderRadius: scale(15),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: cardWidth,
    height: verticalScale(240),
  }
});

export default styles;