import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FDF8F3',
    padding: scale(20),
    borderRadius: scale(30),
    borderColor: '#E76801',
    borderWidth: 1,
    marginBottom: scale(20),
    alignItems: 'center',
    // sin height fijo — flex maneja el tamaño
    width: '85%',
    zIndex: 1,
  },

  cardNumber: {
    marginBottom: scale(8),
    color: 'rgba(0,0,0,0.5)',
    fontSize: moderateScale(14),
    alignSelf: 'flex-start',
  },

  question: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: scale(20),
    color: '#000',
    textAlign: 'center',
    width: '100%',
  },

  // YES/NO
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: scale(10),
    marginBottom: scale(10),
  },

  buttonYes: {
    backgroundColor: '#E76801',
    paddingVertical: scale(10),
    paddingHorizontal: scale(30),
    borderRadius: scale(50),
  },

  buttonNo: {
    backgroundColor: '#FDA769',
    paddingVertical: scale(10),
    paddingHorizontal: scale(30),
    borderRadius: scale(50),
  },

  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    textAlign: 'center',
  },

  // YES + INFO ADICIONAL
  additionalInfoContainer: {
    width: '100%',
    alignItems: 'center',
  },

  additionalSelectedButton: {
    backgroundColor: '#E76801',
    paddingVertical: scale(8),
    paddingHorizontal: scale(30),
    borderRadius: scale(50),
    marginBottom: scale(12),
    minWidth: scale(75),
    alignItems: 'center',
  },

  // INPUT genérico
  inputContainer: {
    width: '100%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#FDA769',
    borderRadius: scale(8),
    padding: scale(10),
    width: '100%',
    minHeight: verticalScale(100),
    maxHeight: verticalScale(160),
    textAlignVertical: 'top',
    fontSize: moderateScale(13),
    marginBottom: scale(10),
  },

  // Botón "Siguiente" pequeño (alineado a la derecha)
  nextButton: {
    paddingVertical: scale(6),
    paddingHorizontal: scale(16),
    borderRadius: scale(50),
    alignSelf: 'flex-end',
    marginBottom: scale(8),
  },

  nextButtonText: {
    color: 'white',
    fontSize: moderateScale(13),
  },

  // SELECT
  dropdownContainer: {
    width: '100%',
    marginVertical: scale(10),
    zIndex: 1000,
  },

  placeholderText: {
    fontSize: moderateScale(13),
    color: 'rgba(0,0,0,0.4)',
  },

  dropdown: {
    borderColor: '#FDA769',
    borderRadius: scale(8),
    backgroundColor: '#FDF8F3',
  },

  dropdownContainerStyle: {
    borderColor: '#FDA769',
    backgroundColor: '#FDF8F3',
  },

  // PHOTO
  photoSection: {
    width: '100%',
    alignItems: 'center',
    gap: scale(12),
  },

  photoSubtitle: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
    fontSize: moderateScale(12),
    paddingHorizontal: scale(10),
  },

  photosScroll: {
    width: '100%',
    maxHeight: verticalScale(200),
  },

  photosScrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: scale(10),
    justifyContent: 'center',
  },

  photoWrapper: {
    position: 'relative',
  },

  photo: {
    width: scale(85),
    height: scale(85),
    borderRadius: scale(8),
  },

  deleteButton: {
    position: 'absolute',
    top: -scale(6),
    right: -scale(6),
    backgroundColor: '#E76801',
    borderRadius: scale(12),
    width: scale(20),
    height: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteButtonText: {
    color: 'white',
    fontSize: moderateScale(10),
  },

  uploadButton: {
    backgroundColor: '#FDA769',
    paddingVertical: scale(10),
    paddingHorizontal: scale(24),
    borderRadius: scale(50),
    alignItems: 'center',
  },

  // Botón Siguiente ancho completo (para photo)
  nextButtonFull: {
    backgroundColor: '#FDA769',
    paddingVertical: scale(10),
    width: '60%',
    borderRadius: scale(50),
    alignItems: 'center',
    marginTop: scale(4),
    marginBottom: scale(8),
  },
});

export default styles;