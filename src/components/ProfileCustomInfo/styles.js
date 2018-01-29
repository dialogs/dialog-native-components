/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small
    },
    boolean: {
      marginTop: 2,
      color: theme.color.primary || Color.primary,
      fontSize: 16,
      lineHeight: 22
    },
    integer: {
      marginTop: 2,
      color: theme.color.primary || Color.primary,
      fontSize: 16,
      lineHeight: 22
    },
    string: {
      marginTop: 2,
      color: Color.black,
      fontSize: 16,
      lineHeight: 22
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
