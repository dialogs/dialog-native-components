/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    aboutText: {
      color: Color.black,
      fontSize: 16,
      lineHeight: 24
    },
    nickText: {
      color: Color.black,
      fontSize: 18,
      lineHeight: 26
    },
    addWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      paddingTop: Padding.small
    },
    addIcon: {
      flex: 0,
      marginRight: Padding.small,
      tintColor: theme.color.primary || Color.primary
    },
    addText: {
      flex: 1,
      fontSize: 14,
      lineHeight: 24,
      color: theme.color.primary || Color.primary
    },
    hintText: {
      fontSize: 14,
      lineHeight: 20,
      marginTop: Padding.small,
      color: Color.gray
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
