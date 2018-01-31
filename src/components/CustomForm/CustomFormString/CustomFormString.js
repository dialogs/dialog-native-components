/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import CustomFormStringAndroid from './CustomFormStringAndroid';
import CustomFormStringIOS from './CustomFormStringIOS';

const CustomFormString = Platform.select({
  ios: () => CustomFormStringIOS,
  android: () => CustomFormStringAndroid
})();

export default CustomFormString;
