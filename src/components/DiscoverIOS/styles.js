import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 10,
    backgroundColor: '#6203a5',
    height: 60
  },
  title: {
    margin: 0,
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    lineHeight: 22
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  cards: {
    flex: 1,
    backgroundColor: '#eeeeee',
    flexDirection: 'column',
    paddingBottom: 5,
    paddingTop: 5
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default styles;
