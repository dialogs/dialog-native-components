/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import ColorJS from 'color';
import { Color, Padding } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    button: {
      marginRight: Padding.small,
      overflow: 'hidden',
      borderRadius: 3
    },
    wrapper: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small,
      paddingLeft: Padding.default,
      paddingRight: Padding.default,
      flex: 1
    },
    text: {
      fontSize: 13,
      color: Color.success
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
