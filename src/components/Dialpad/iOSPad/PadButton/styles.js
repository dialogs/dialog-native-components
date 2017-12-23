/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../../types';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    wrapper: {
      flex: 1,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '33.333%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    container: {
      width: 64,
      height: 64,
      flex: 0,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 500,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Color.grayLight
    },
    value: {
      fontWeight: '500',
      fontSize: 22,
      lineHeight: 30,
      color: theme.color.primary || Color.primary
    },
    text: {
      color: Color.gray,
      fontSize: 10,
      lineHeight: 14
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
