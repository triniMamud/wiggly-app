import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F4EE',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(30),
  },

  headerText: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: '#E76801',
    marginBottom: scale(20),
  },

  input: {
    width: '100%',
    paddingHorizontal: scale(12),
    paddingVertical: scale(10),
    marginVertical: scale(5),
    borderColor: '#E76801',
    borderRadius: scale(10),
    backgroundColor: '#FDF8F3',
    fontSize: moderateScale(14),
  },

  shelterInputContainer: {
    width: '100%',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  eyeIcon: {
    position: 'absolute',
    right: scale(10),
    padding: scale(10),
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  halfInput: {
    width: '48%',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(10),
    width: '100%',
    justifyContent: 'center'
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(8),
    justifyContent: 'center',
    flex: 1,
  },

  errorText: {
    color: 'red',
    fontSize: moderateScale(11),
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: scale(4),
  },

  shelterErrorText: {
    alignSelf: 'flex-start',
    marginBottom: scale(4),
  },

  checkboxLabel: {
    color: '#E76801',
    fontSize: moderateScale(13),
  },

  registerButton: {
    paddingVertical: scale(14),
    borderRadius: scale(50),
    width: '100%',
    alignItems: 'center',
    marginTop: scale(24),
    marginBottom: scale(16),
  },

  registerButtonText: {
    color: '#FFF',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  signInText: {
    textAlign: 'center',
    color: '#787878',
    fontSize: moderateScale(13),
  },

  signInLink: {
    color: '#E76801',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
