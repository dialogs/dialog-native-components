/*
 * @flow
 */

import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import withContext from './src/hoc/context';
import DiscoverPreview from './src/previews/DiscoverPreview';
import SchedulePreview from './src/previews/SchedulePreview';
import SightsPreview from './src/previews/SightsPreview';
import ContactsPreview from './src/previews/ContactsPreview';
import ProfilePreview from './src/previews/ProfilePreview';

const theme = {
  color: {
    primary: '#4E0D9A',
    danger: '#e22d44'
  },
  gradient: ['#79149A', '#400B9A']
};
const style = {};

const DialogComponents = TabNavigator(
  {
    Discover: { screen: withContext(DiscoverPreview, theme, style) },
    Profile: { screen: withContext(ProfilePreview, theme, style) },
    Schedule: { screen: withContext(SchedulePreview, theme, style) },
    Sights: { screen: withContext(SightsPreview, theme, style) },
    Contacts: { screen: withContext(ContactsPreview, theme, style) }
  },
  {
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
  }
);

AppRegistry.registerComponent('DialogComponents', () => DialogComponents);
