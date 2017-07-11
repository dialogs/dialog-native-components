import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: '#e2e2e2',
    borderWidth: 1,
    marginBottom: 0
  },
  body: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignContent: 'center'
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    lineHeight: 24  ,
    fontWeight: '500'
  },
  shortname: {
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  description: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.4)'
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
  },
  membersText: {
    flex: 0,
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.4)',
    fontWeight: '500'
  },
  creator: {
    flex: 1,
  },
  creatorText: {
    textAlign: 'right'
  },
  creatorName: {
    fontWeight: '500'
  }
});

export default styles;
