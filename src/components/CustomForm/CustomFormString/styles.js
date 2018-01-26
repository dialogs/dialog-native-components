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
      marginTop: 6,
      color: Color.gray,
      fontSize: 14
    },
    input: {
      marginTop: -4,
      marginLeft: -4,
      marginRight: -4,
      fontSize: 16
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
