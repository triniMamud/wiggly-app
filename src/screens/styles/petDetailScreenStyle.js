import { StyleSheet, Dimensions } from 'react-native';
import {useMemo} from 'react';

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
    marginBottom: 5,
    marginTop: -10
  },
  favoriteIcon: {
    width: 30,
    height: 30,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 5,
    justifyContent: 'flex-start',
  },
  detailContainer: {
    paddingBottom: 100,
    overflow: 'visible'
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
    marginBottom: 3,
    //marginTop: 3,
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
    position: 'absolute',
    bottom: 10,
    left: '10%',
    right: '10%',
    backgroundColor: '#E76801',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
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
    marginTop: 5,
    marginBottom: 5
  },
  detailText: {
    color: '#000',
    marginBottom: 5
  },
  fadeContainer: {
    position: 'relative',
    paddingTop: 30,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 180,
    left: 0,
    right: 0,
    height: 100
  },
  scrollContainer: {
    flex: 1, 
    marginBottom: 25
  },
  scrollContent: {
    //paddingBottom: 100, // Ensures space at the bottom for scrolling
  },
});

export default styles;