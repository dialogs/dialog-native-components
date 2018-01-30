/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import PadCallButtonAndroid from './PadCallButtonAndroid';
import PadCallButtonIOS from './PadCallButtonIOS';

const PadCallButton = Platform.select({
  ios: () => PadCallButtonIOS,
  android: () => PadCallButtonAndroid
})();

export default PadCallButton;
