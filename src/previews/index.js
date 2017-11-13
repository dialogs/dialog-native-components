/*
 * @flow
 */

import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import withContext from '../hoc/context';
import DiscoverPreview from './DiscoverPreview';
// import FeedbackPreview from './FeedbackPreview';
import SchedulePreview from './SchedulePreview';
import SightsPreview from './SightsPreview';
import ContactsPreview from './ContactsPreview';
import DialpadPreview from './DialpadPreview';

const theme = {
  color: {
    // primary: '#e4002b',
    // danger: '#e22d44'
  }
};
const style = {};

const ExampleScreen = TabNavigator({
  Discover: { screen: withContext(DiscoverPreview, theme, style) },
  // Feedback: { screen: withContext(FeedbackPreview, theme, style) },
  Schedule: { screen: withContext(SchedulePreview, theme, style) },
  Sights: { screen: withContext(SightsPreview, theme, style) },
  Contacts: { screen: withContext(ContactsPreview, theme, style) },
  Dialpad: { screen: withContext(DialpadPreview, theme, style) }
});

AppRegistry.registerComponent('ExampleScreen', () => {
  return withContext(DialpadPreview, theme, style);
});
