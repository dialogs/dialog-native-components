/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import { Color } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    title: {
      minHeight: 44,
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 12,
      paddingBottom: 12,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    titleText: {
      flex: 1,
      color: theme.color.primary || Color.primary,
      fontSize: 14,
      lineHeight: 20
    },
    arrow: {
      flex: 0,
      marginLeft: -6,
      marginRight: 2,
      tintColor: theme.color.primary || Color.primary
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
