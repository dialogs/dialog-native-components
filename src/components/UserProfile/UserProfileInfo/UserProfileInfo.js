/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import UserProfileInfoAndroid from './UserProfileInfoAndroid';
import UserProfileInfoIOS from './UserProfileInfoIOS';

const UserProfileInfo = Platform.select({
  ios: () => UserProfileInfoIOS,
  android: () => UserProfileInfoAndroid
})();

export default UserProfileInfo;
