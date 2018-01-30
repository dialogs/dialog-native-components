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
      elevation: 2,
      backgroundColor: theme.color.white || Color.white,
      marginBottom: Padding.default * 2
    },
    title: {
      color: theme.color.primary || Color.primary,
      fontSize: 16,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
