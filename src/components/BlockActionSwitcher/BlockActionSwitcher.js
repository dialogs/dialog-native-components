/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import BlockActionSwitcherAndroid from './BlockActionSwitcherAndroid';
import BlockActionSwitcherIOS from './BlockActionSwitcherIOS';

const BlockActionSwitcher = Platform.select({
  ios: () => BlockActionSwitcherIOS,
  android: () => BlockActionSwitcherAndroid
})();

export default BlockActionSwitcher;
