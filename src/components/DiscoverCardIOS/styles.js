import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    margin: 5,
    borderColor: 'rgba(0, 0, 0, 0.06)',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  body: {
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 16,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center'
  },
  titleWrapper: {
    width: 120,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
    flex: 0
  },
  titleIcon: {
    flex: 0,
    width: 22,
    height: 22,
    marginRight: 4,
  },
  shortname: {
    flex: 0,
    lineHeight: 22,
    color: '#8E8E8E',
  },
  avatar: {
    flex: 0,
    width: 56,
    height: 56,
    borderRadius: 100,
    marginBottom: 10
  }
});

export default styles;
