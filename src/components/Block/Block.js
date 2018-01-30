/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import BlockIOS from './BlockIOS';
import BlockAndroid from './BlockAndroid';

const Block = Platform.select({
  ios: () => BlockIOS,
  android: () => BlockAndroid
})();

export default Block;
