/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import CustomFormBooleanAndroid from './CustomFormBooleanAndroid';
import CustomFormBooleanIOS from './CustomFormBooleanIOS';

const CustomFormBoolean = Platform.select({
  ios: () => CustomFormBooleanIOS,
  android: () => CustomFormBooleanAndroid
})();

export default CustomFormBoolean;
