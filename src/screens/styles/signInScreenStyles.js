import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FDF8F3',
    paddingHorizontal: scale(20),
  },

  headerText: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: scale(8),
    color: '#E76801',
  },

  subHeaderText: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    marginBottom: scale(24),
    color: '#787878',
    lineHeight: moderateScale(22),
  },

  input: {
    width: '100%',
    paddingHorizontal: scale(12),
    paddingVertical: scale(10),
    marginVertical: scale(5),
    borderWidth: 1,
    borderColor: '#E76801',
    borderRadius: scale(10),
    backgroundColor: '#FDF8F3',
    fontSize: moderateScale(14),
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: scale(5),
  },

  eyeIcon: {
    position: 'absolute',
    right: scale(10),
    padding: scale(10),
  },

  errorText: {
    color: 'red',
    fontSize: moderateScale(11),
    marginTop: scale(-4),
    marginBottom: scale(4),
  },

  forgotPasswordText: {
    textAlign: 'right',
    color: '#FDA769',
    fontSize: moderateScale(12),
    textDecorationLine: 'underline',
  },

  signInButton: {
    paddingVertical: scale(14),
    borderRadius: scale(50),
    width: '100%',
    alignItems: 'center',
    marginTop: verticalScale(40),
    marginBottom: scale(16),
  },

  signInButtonText: {
    color: '#FFF',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  noAccountText: {
    textAlign: 'center',
    color: '#787878',
    fontSize: moderateScale(13),
  },

  registerLink: {
    color: '#E76801',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  fpContainer: {
    alignItems: 'flex-end',
    marginTop: scale(4),
  }
});

export default styles;