import { StyleSheet } from 'react-native';
import { scale, moderateScale } from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  row: {
    justifyContent: 'space-between',
    marginVertical: scale(5),
  },

  item: {
    width: '50%',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: scale(10),
    backgroundColor: '#FDF8F3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.15,
    shadowRadius: scale(4),
    elevation: 5,
  },

  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#FDA769'
  },

  icon: {
    width: 25,
    height: 25,
  },
});

export default styles;