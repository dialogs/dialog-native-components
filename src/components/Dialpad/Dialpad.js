/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { Platform } from 'react-native';

const Dialpad = Platform.select({
  get android() {
    return require('./Dialpad.android');
  },
  get ios() {
    return require('./Dialpad.ios');
  }
});

export default Dialpad;
