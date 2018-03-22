/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import PadFooterAndroid from './PadFooterAndroid';
import PadFooterIOS from './PadFooterIOS';

const PadFooter = Platform.select({
  ios: () => PadFooterIOS,
  android: () => PadFooterAndroid
})();

export default PadFooter;
