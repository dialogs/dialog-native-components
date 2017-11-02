/*
 * @flow
 */

import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import withContext from './src/hoc/context';
import DiscoverPreview from './src/previews/DiscoverPreview';
// import FeedbackPreview from './src/previews/FeedbackPreview';
import SchedulePreview from './src/previews/SchedulePreview';
import SightsPreview from './src/previews/SightsPreview';
import ContactsPreview from './src/previews/ContactsPreview';
import DialpadPreview from './src/previews/DialpadPreview';

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
  Dialpad: { screen: withContext(DialpadPreview, theme, style) },
});

AppRegistry.registerComponent('ExampleScreen', () => withContext(DialpadPreview, theme, style));
