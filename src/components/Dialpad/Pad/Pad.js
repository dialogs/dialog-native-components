/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import PadAndroid from './PadAndroid';
import PadIOS from './PadIOS';

const Pad = Platform.select({
  ios: () => PadIOS,
  android: () => PadAndroid
})();

export default Pad;
