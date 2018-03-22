/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import UserProfileActionsAndroid from './UserProfileActionsAndroid';
import UserProfileActionsIOS from './UserProfileActionsIOS';

const UserProfileActions = Platform.select({
  ios: () => UserProfileActionsIOS,
  android: () => UserProfileActionsAndroid
})();

export default UserProfileActions;
