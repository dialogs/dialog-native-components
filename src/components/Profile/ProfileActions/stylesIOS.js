/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    blockButton: {
      paddingTop: Padding.default,
      paddingBottom: Padding.default,
      paddingLeft: Padding.large,
      paddingRight: Padding.large,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    blockButtonText: {
      fontSize: 16,
      lineHeight: 32,
      color: Color.black
    },
    count: {
      fontSize: 16,
      color: Color.grayLight
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
