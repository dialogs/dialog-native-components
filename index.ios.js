/*
 * @flow
 */

import { AppRegistry } from 'react-native';
import { StackNavigator, CardStack } from 'react-navigation';
import withContext from './src/hoc/context';
import DiscoverPreview from './src/previews/DiscoverPreview';
import FeedbackPreview from './src/previews/FeedbackPreview';

const theme = {};
const style = {};

const ExampleScreen = StackNavigator({
  Feedback: { screen: withContext(FeedbackPreview, theme, style) },
  Discover: { screen: withContext(DiscoverPreview, theme, style) },
});

AppRegistry.registerComponent('ExampleScreen', () => ExampleScreen);
