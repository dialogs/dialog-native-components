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
      marginRight: Padding.large,
      paddingLeft: Padding.large
    },
    text: {
      flex: 1,
      fontSize: 13,
      lineHeight: 32,
      color: Color.grayLight
    },
    switch: {
      position: 'absolute',
      top: Padding.default,
      right: 0
    },
    withBorder: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Color.grayLighter
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
