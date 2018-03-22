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
      paddingTop: Padding.default,
      paddingBottom: Padding.default,
      paddingLeft: Padding.large,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      alignContent: 'flex-start',
      justifyContent: 'center'
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      alignContent: 'flex-start',
      justifyContent: 'center'
    },
    iconWrapper: {
      width: 32,
      height: 32,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 1000,
      marginRight: Padding.large
    },
    icon: {
      flex: 0,
      tintColor: Color.white
    },
    spacer: {
      width: 32,
      flex: 0,
      marginRight: Padding.large
    },
    text: {
      flex: 1,
      fontSize: 16,
      lineHeight: 32,
      color: Color.black
    },
    switch: {
      position: 'absolute',
      top: Padding.default,
      right: Padding.large
    },
    border: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: Color.grayLighter,
      marginLeft: 32 + Padding.large * 2
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
