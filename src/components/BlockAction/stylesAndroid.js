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
      paddingTop: Padding.large,
      paddingBottom: Padding.large,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      alignContent: 'flex-start',
      justifyContent: 'center'
    },
    icon: {
      flex: 0,
      marginRight: Padding.large
    },
    spacer: {
      width: 26,
      flex: 0,
      marginRight: Padding.large
    },
    text: {
      flex: 1,
      fontSize: 16,
      color: Color.black
    },
    switch: {
      position: 'absolute',
      top: Padding.large,
      right: Padding.default * 2 - 6
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
