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
      paddingTop: Padding.default,
      paddingBottom: Padding.default,
      paddingRight: Padding.large,
      marginLeft: Padding.large
    },
    withBorder: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Color.grayLighter
    },
    input: {
      color: Color.black,
      fontSize: 16,
      height: 22
    },
    title: {
      color: Color.grayLight,
      fontSize: 13,
      marginBottom: Padding.small / 2 + 2
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
