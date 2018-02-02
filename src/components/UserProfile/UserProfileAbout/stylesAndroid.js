/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import ColorJS from 'color';
import { Color, Padding } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    aboutText: {
      color: Color.black,
      fontSize: 16,
      lineHeight: 24
    },
    aboutInput: {
      color: Color.black,
      fontSize: 16,
      lineHeight: 24,
      marginLeft: -4,
      marginRight: -4,
      paddingTop: 0
    },
    addWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    addIcon: {
      flex: 0,
      marginRight: Padding.small,
      tintColor: theme.color.primary || Color.primary
    },
    addText: {
      flex: 1,
      height: 24,
      fontSize: 14,
      lineHeight: 24,
      color: theme.color.primary || Color.primary
    },
    hintText: {
      fontSize: 14,
      lineHeight: 20,
      marginTop: Padding.small,
      color: Color.gray
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'flex-start'
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
