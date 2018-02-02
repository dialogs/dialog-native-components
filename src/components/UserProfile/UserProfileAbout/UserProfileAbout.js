/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import UserProfileAboutAndroid from './UserProfileAboutAndroid';
import UserProfileAboutIOS from './UserProfileAboutIOS';

const UserProfileAbout = Platform.select({
  ios: () => UserProfileAboutIOS,
  android: () => UserProfileAboutAndroid
})();

export default UserProfileAbout;
