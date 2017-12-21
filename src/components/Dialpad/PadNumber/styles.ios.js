/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      flex: 0,
      height: 70,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      position: 'relative'
      // backgroundColor: 'rgba(255,0,0,.2)'
    },
    small: {
      height: 60
    },
    number: {
      width: '100%',
      textAlign: 'center',
      fontSize: 26,
      color: Color.gray,
      letterSpacing: 2
    },
    numberSmall: {
      fontSize: 22
    },
    backspace: {
      position: 'absolute',
      top: 19,
      right: 20,
      width: 32,
      height: 32,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    backspaceIcon: {
      marginLeft: -2,
      width: 32,
      height: 32,
      tintColor: Color.gray
    },
    backspaceSmall: {
      top: 16,
      width: 28,
      height: 28
    },
    backspaceIconSmall: {
      width: 28,
      height: 28,
      tintColor: Color.gray
    },
    containerCompact: {
      marginTop: -5,
      marginBottom: -10
    },
    containerWidthPadding: {
      marginTop: 20
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
