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
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 500
    },
    normal: {
      width: 64,
      height: 64,
    },
    small: {
      width: 58,
      height: 58,
    },
    iconNormal: {
      width: 32,
      height: 32
    },
    iconSmall: {
      width: 28,
      height: 28
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
