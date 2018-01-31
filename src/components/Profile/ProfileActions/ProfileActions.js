/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';
import ProfileActionsAndroid from './ProfileActionsAndroid';
import ProfileActionsIOS from './ProfileActionsIOS';

const ProfileActions = Platform.select({
  ios: () => ProfileActionsIOS,
  android: () => ProfileActionsAndroid
})();

export default ProfileActions;
