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
      borderRadius: 500
    },
    normal: {
      width: 64,
      height: 64
    },
    small: {
      width: 58,
      height: 58
    },
    iconNormal: {
      width: 32,
      height: 32,
      tintColor: Color.white
    },
    iconSmall: {
      width: 28,
      height: 28,
      tintColor: Color.white
    },
    verticalButton: {
      height: 40,
      backgroundColor: theme.color.success || Color.success,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    verticalIcon: {
      marginTop: 2,
      width: 24,
      height: 24,
      tintColor: Color.white
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
