import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 2,
    backgroundColor: 'white',
    // borderColor: '#ececec',
    // borderWidth: 1,
    marginBottom: 0,
    elevation: 2
  },
  body: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignContent: 'center'
  },
  info: {
    flex: 1
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '500',
    color: '#727272',
    flex: 1
  },
  titleIcon: {
    flex: 0,
    width: 24,
    height: 24,
    marginRight: 4,
  },
  shortname: {
    lineHeight: 20,
    color: '#acacac',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 16,
    paddingBottom: 2,
    color: '#727272'
  },
  avatar: {
     width: 60,
     height: 60,
     borderRadius: 40,
     marginRight: 10
  },
  footer: {
    padding: 10,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  members: {
    flex: 0,
    width: 60,
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  membersIcon: {
    flex: 0,
    marginRight: 4,
    width: 18,
    height: 18
  },
  membersText: {
    flex: 0,
    fontSize: 14,
    lineHeight: 20,
    color: '#727272',
    fontWeight: '500'
  },
  creator: {
    flex: 1,
  },
  creatorText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#727272',
    textAlign: 'right'
  },
  creatorName: {
    fontWeight: '500'
  }
});

export default styles;
