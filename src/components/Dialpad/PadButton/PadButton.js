/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import PadButtonAndroid from './PadButtonAndroid';
import PadButtonIOS from './PadButtonIOS';

const PadButton = Platform.select({
  ios: () => PadButtonIOS,
  android: () => PadButtonAndroid
})();

export default PadButton;
