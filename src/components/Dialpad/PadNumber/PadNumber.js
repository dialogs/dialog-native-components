/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import PadNumberAndroid from './PadNumberAndroid';
import PadNumberIOS from './PadNumberIOS';

const PadNumber = Platform.select({
  ios: () => PadNumberIOS,
  android: () => PadNumberAndroid
})();

export default PadNumber;
