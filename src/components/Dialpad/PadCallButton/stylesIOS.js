/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      flex: 0,
      backgroundColor: theme.color.success || Color.success,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 500,
      marginTop: -20
    },
    normal: {
      width: 74,
      height: 74
    },
    small: {
      width: 64,
      height: 64
    },
    iconNormal: {
      width: 34,
      height: 34,
      tintColor: Color.white
    },
    iconSmall: {
      width: 28,
      height: 28,
      tintColor: Color.white
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
