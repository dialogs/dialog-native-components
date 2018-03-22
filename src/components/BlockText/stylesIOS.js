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
      backgroundColor: Color.white,
      paddingTop: Padding.default,
      paddingBottom: Padding.default,
      marginLeft: Padding.large,
      paddingRight: Padding.large
    },
    withBorder: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Color.grayLighter
    },
    title: {
      color: Color.grayLight,
      fontSize: 13,
      marginBottom: Padding.small / 2
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
