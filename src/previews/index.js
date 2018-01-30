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
import messages from '../messages';

const theme = {
  color: {
    primary: '#4E0D9A',
    danger: '#e22d44'
  },
  padding: {},
  gradient: ['#79149A', '#400B9A']
};
const style = {};
const locale = 'ru';
const globalValues = {};

const tabs = {
  // Dialpad: {
  //   screen: withContext(
  //     DialpadPreview,
  //     theme,
  //     style,
  //     locale,
  //     messages,
  //     globalValues
  //   )
  // },
  User: {
    screen: withContext(
      UserProfilePreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Profile: {
    screen: withContext(
      ProfilePreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Discover: {
    screen: withContext(
      DiscoverPreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Schedule: {
    screen: withContext(
      SchedulePreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Sights: {
    screen: withContext(
      SightsPreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Contacts: {
    screen: withContext(
      ContactsPreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  }
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
