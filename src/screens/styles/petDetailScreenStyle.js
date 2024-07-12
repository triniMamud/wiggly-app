import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
    alignItems: 'center'
  },
  imageContainer: {
    height: 500,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,

  },
  favoriteIcon: {
    width: 30,
    height: 30,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    justifyContent: 'flex-start',
  },
  detailContainer: {
    paddingBottom: 100
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: '#FDF8F3',
    borderRadius: 55,
  },
  handleIndicatorStyle: {
    backgroundColor: '#E76801',
    width: 40,
    height: 5,
    borderRadius: 2.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  petAttributesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  petAttribute: {
    alignItems: 'center',
    borderColor: '#FDA769',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  petAttributeText: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    maxWidth: 80,
    textAlign: 'center',
    color: '#FDA769',
  },
  petAttributeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  petAttributeLabel: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E76801',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    width: '80%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  refugioText: {
    color: '#000',
    marginLeft: 10
  },
  refugioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10
  },
  detailText: {
    color: '#000',
    marginBottom: 5
  },
  fadeContainer: {
    position: 'relative',
    paddingTop: 30,
    width: '100%',
    alignItems: 'center'
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 110
  },
});

export default styles;