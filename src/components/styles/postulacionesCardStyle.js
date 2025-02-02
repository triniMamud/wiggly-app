import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width) - 20;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 15,
    borderColor: '#FDA769',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
    width: cardWidth,
    height: 200,
    flexDirection: 'row'
  },
  halfLeft: {
    width: '50%',
    borderRightColor: '#FDA769',
    borderRightWidth: 0.5,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: '100%',
  },
  image: {
    height: '100%',
    resizeMode: 'stretch',
    width: (cardWidth/2)-0.5,
    borderTopRadius: 15,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#FDF8F3',
    paddingTop: 5
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
  halfRight: {
    borderLeftColor: '#FDA769',
    borderLeftWidth: 0.5,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FDF8F3',
    height: '100%',
    width:'50%'
  },
  statusBar: {
    width: '95%',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 8,
    marginBottom: 5,
    //borderLeftWidth: 0,
    //borderLeftColor: '#FDA769',
    justifyContent: 'flex-start',
    gap: 15,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center'
  },
  textStatus: {
    fontWeight: 'bold'
  },
  stageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
    marginLeft: 5
  },
  stageText: {
    fontWeight: 'bold',
    fontSize: 12
  },
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
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
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
    justifyContent: 'space-between',
    width: '100%'
  },
});

export default styles;