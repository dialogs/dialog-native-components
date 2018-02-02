/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small / 2,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2
    },
    title: {
      color: Color.gray,
      fontSize: 14,
      marginBottom: 4
    },
    input: {
      fontSize: 16,
      lineHeight: 24,
      marginLeft: -4,
      marginRight: -4,
      paddingTop: 0
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
