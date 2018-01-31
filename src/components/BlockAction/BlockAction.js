/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import BlockActionAndroid from './BlockActionAndroid';
import BlockActionIOS from './BlockActionIOS';

const BlockAction = Platform.select({
  ios: () => BlockActionIOS,
  android: () => BlockActionAndroid
})();

export default BlockAction;
