/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import BlockTextAndroid from './BlockTextAndroid';
import BlockTextIOS from './BlockTextIOS';

const BlockText = Platform.select({
  ios: () => BlockTextIOS,
  android: () => BlockTextAndroid
})();

export default BlockText;
