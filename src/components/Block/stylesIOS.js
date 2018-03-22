/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    wrapper: {
      marginBottom: Padding.default * 2
    },
    container: {
      padding: 0,
      backgroundColor: theme.color.white || Color.white,
      borderColor: theme.color.grayLight || Color.grayLight,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    title: {
      color: theme.color.gray || Color.gray,
      fontSize: 16,
      lineHeight: 20,
      paddingTop: Padding.small,
      paddingBottom: Padding.small,
      paddingRight: Padding.large,
      paddingLeft: Padding.large
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
