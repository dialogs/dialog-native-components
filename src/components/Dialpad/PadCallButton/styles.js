/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      flex: 0,
      backgroundColor: theme.color.success || Color.success,
      width: 64,
      height: 64,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 500
    },
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
