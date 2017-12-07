/*
 * @flow
 */

import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import withContext from '../hoc/context';
import DiscoverPreview from './DiscoverPreview';
import SchedulePreview from './SchedulePreview';
import SightsPreview from './SightsPreview';
import ContactsPreview from './ContactsPreview';
import ProfilePreview from './ProfilePreview';
import UserProfilePreview from './UserProfilePreview';
import DialpadPreview from './DialpadPreview';

const theme = {
  color: {
    primary: '#4E0D9A',
    danger: '#e22d44'
  },
  gradient: ['#79149A', '#400B9A']
};
const style = {};

const tabs = {
  User: { screen: withContext(UserProfilePreview, theme, style) },
  Profile: { screen: withContext(ProfilePreview, theme, style) },
  Dialpad: { screen: withContext(DialpadPreview, theme, style) },
  Discover: { screen: withContext(DiscoverPreview, theme, style) },
  Schedule: { screen: withContext(SchedulePreview, theme, style) },
  Sights: { screen: withContext(SightsPreview, theme, style) },
  Contacts: { screen: withContext(ContactsPreview, theme, style) }
};
const tabOptions = {
  lazy: true,
  animationEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
    style: {
      backgroundColor: theme.color.primary
    },
    indicatorStyle: {
      backgroundColor: '#fff'
    }
  }
};

AppRegistry.registerComponent('DialogComponents', () =>
  TabNavigator(tabs, tabOptions)
);
