/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import ProfileInfoAndroid from './ProfileInfoAndroid';
import ProfileInfoIOS from './ProfileInfoIOS';

const ProfileInfo = Platform.select({
  ios: () => ProfileInfoIOS,
  android: () => ProfileInfoAndroid
})();

export default ProfileInfo;
