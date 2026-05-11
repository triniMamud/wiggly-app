import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
    alignItems: 'center'
  },

  imageContainer: {
    width: width,
    height: verticalScale(420),
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(5),
    marginTop: scale(-10)
  },

  favoriteIcon: {
    width: scale(30),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center'
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingBottom: scale(15),
    paddingTop: scale(5),
  },
  detailContainer: {
    paddingBottom: 100,
    overflow: 'visible'
  },

  bottomSheet: {
    backgroundColor: '#FDF8F3',
    borderRadius: scale(55),
  },

  handleIndicatorStyle: {
    backgroundColor: '#E76801',
    width: scale(40),
    height: scale(5),
    borderRadius: scale(3)
  },

  title: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: '#000'
  },

  petAttributesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(8)
  },

  petAttribute: {
    alignItems: 'center',
    borderColor: '#FDA769',
    borderWidth: 1,
    borderRadius: scale(15),
    paddingHorizontal: scale(8),
    paddingBottom: scale(5),
    flex: 1,                     
    marginHorizontal: scale(3), 
  },

  petAttributeText: {
    fontSize: moderateScale(13),
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
    color: '#FDA769',
  },

  petAttributeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(36),
  },

  petAttributeLabel: {
    fontSize: moderateScale(11),
    color: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
  },

  button: {
    position: 'absolute',
    bottom: scale(10),
    left: '10%',
    right: '10%',
    backgroundColor: '#E76801',
    borderRadius: scale(50),
    paddingVertical: scale(15),
    alignItems: 'center',
    // sombra para que se vea sobre el contenido
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),
    elevation: 4,
  },

  buttonText: {
    color: '#FFF',
    fontSize: moderateScale(16),
    fontWeight: 'bold'
  },

  refugioText: {
    color: '#000',
    marginLeft: scale(8),
    fontSize: moderateScale(14)
  },

  refugioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
    marginBottom: scale(5),
  },

  detailText: {
    color: '#000',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
    marginBottom: scale(5),
  },

  fadeContainer: {
    position: 'relative',
    paddingTop: scale(30),
  },

  gradientOverlay: {
    position: 'absolute',
    bottom: scale(180),
    left: 0,
    right: 0,
    height: scale(100),
  },

  scrollContainer: {
    flex: 1, 
    marginBottom: scale(25)
  },
});

export default styles;