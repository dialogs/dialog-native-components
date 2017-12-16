/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import { Color } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      minHeight: 50,
      backgroundColor: theme.color.primary || Color.primary,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      elevation: 1
    },
    text: {
      color: '#fff',
      fontSize: 14
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
