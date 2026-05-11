import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width - scale(20);
const halfWidth = cardWidth / 2;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: scale(10),
    borderRadius: scale(15),
    borderColor: '#FDA769',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: scale(5),
    elevation: 2,
    overflow: 'hidden',
    width: cardWidth,
    height: 200,
    height: verticalScale(200),
    flexDirection: 'row'
  },

  halfLeft: {
    width: halfWidth,
    borderRightColor: '#FDA769',
    borderRightWidth: 0.5,
    borderBottomLeftRadius: scale(15),
    borderTopLeftRadius: scale(15),
    height: '100%',
  },

  imageContainer: {
    width: halfWidth - 0.5,
    height: verticalScale(110)
  },

  image: {
    height: '100%',
    resizeMode: 'cover',
    width: halfWidth - 0.5,
    borderTopLeftRadius: scale(15),
  },

  detailsContainer: {
    paddingHorizontal: scale(8),
    paddingBottom: scale(8),
    backgroundColor: '#FDF8F3',
    paddingTop: scale(5),
    flex: 1
  },

  name: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#333',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(3),
  },

  location: {
    marginLeft: scale(4),
    color: '#555',
    fontSize: moderateScale(11),
    flexShrink: 1,  
  },

  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(3),
  },

  age: {
    marginLeft: scale(4),
    color: '#555',
    fontSize: moderateScale(11),
  },

  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  halfRight: {
    borderLeftColor: '#FDA769',
    borderLeftWidth: 0.5,
    borderBottomRightRadius: scale(15),
    borderTopRightRadius: scale(15),
    backgroundColor: '#FDF8F3',
    height: '100%',
    width: halfWidth,
    overflow: 'hidden',
  },

  statusBar: {
    width: '100%',
    borderBottomRightRadius: scale(8),
    paddingTop: scale(6),
    paddingBottom: scale(6),
    paddingHorizontal: scale(8),
    marginBottom: scale(4),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8)
  },

  textStatus: {
    fontWeight: 'bold',
    fontSize: moderateScale(11),
  },

  stageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
    marginVertical: scale(4),
    marginLeft: scale(6),
  },

  stageText: {
    fontWeight: 'bold',
    fontSize: moderateScale(10),
  },

  // Estados del status badge
  pending: {
    backgroundColor: "#FFE3B2",
    color: "#FFA800"
  },
  accepted: {
    backgroundColor: "#CCF6DE",
    color: "#41C980"
  },
  declined: {
    backgroundColor: "#FFBDBD",
    color: "#C94141"
  },

  buttonContainer: {
    paddingHorizontal: scale(8),
    paddingBottom: scale(8),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  button: {
    backgroundColor: '#E76801',
    width: '100%',
    paddingVertical: scale(6),
    borderRadius: scale(12),
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
});

export default styles;