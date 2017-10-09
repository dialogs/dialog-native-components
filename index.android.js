/*
 * @flow
 */

import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import withContext from './src/hoc/context';
import DiscoverPreview from './src/previews/DiscoverPreview';
import FeedbackPreview from './src/previews/FeedbackPreview';
import SchedulePreview from './src/previews/SchedulePreview';

const theme = {
  color: {
    danger: '#f00'
  }
};
const style = {};

const ExampleScreen = TabNavigator({
  Discover: { screen: withContext(DiscoverPreview, theme, style) },
  // Feedback: { screen: withContext(FeedbackPreview, theme, style) },
  Schedule: { screen: withContext(SchedulePreview, theme, style) },
});

AppRegistry.registerComponent('ExampleScreen', () => ExampleScreen);
