import {StyleSheet, Dimensions} from 'react-native';

import { scale, verticalScale, moderateScale } from '../../utils/responsive';

const { width } = Dimensions.get('window');
const circleSize = Math.min(width * 0.65, scale(270));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FDF8F3',
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(30),
  },

  firstContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  logoContainer: {
    marginBottom: scale(4),
    alignItems: 'center',
  },

  logo: {
    width: scale(80),
    height: scale(80),
  },

  titleContainer: {
    alignItems: 'center',
  },

  titleImage: {
    width: scale(200),
    height: verticalScale(80),
    marginBottom: scale(-10),
  },

  subtitleText: {
    fontSize: moderateScale(15),
    color: '#888',
    marginBottom: verticalScale(20),
    textAlign: 'center'
  },

  imageCircle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: '#E1D7F0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  mainImage: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: circleSize / 2,
    borderBottomLeftRadius: circleSize / 2,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: verticalScale(10),
  },

  button: {
    width: '90%',
    paddingVertical: scale(12),
    marginVertical: scale(8),
    borderRadius: scale(50),
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
    color: '#FFF',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  secondaryButtonText: {
    color: '#E76801',
    fontSize: moderateScale(15),
    letterSpacing: 1,
  },
});

export default styles;
