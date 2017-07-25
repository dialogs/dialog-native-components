import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    // height: 100,
    margin: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 8,
    shadowRadius: 2
  },
  body: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
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
