/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import ColorJS from 'color';
import { Color } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      backgroundColor: '#fff',
      borderBottomColor: Color.border,
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    containerOpened: {
      backgroundColor: ColorJS(theme.color.primary || Color.primary)
        .alpha(0.1)
        .mix(ColorJS('#fff'))
    },
    cardHeading: {
      minHeight: 74,
      flexDirection: 'row',
      flexWrap: 'nowrap'
    },
    cardHeadingText: {
      flex: 1,
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 13,
      paddingBottom: 13
    },
    title: {
      fontSize: 20,
      color: Color.black,
      lineHeight: 24,
      marginBottom: 4
    },
    position: {
      fontSize: 14,
      color: Color.gray,
      lineHeight: 20
    },
    imageSmall: {
      flex: 0,
      width: 74,
      minHeight: 74,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    imageLarge: {
      flex: 1,
      display: 'flex',
      minHeight: 350,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    region: {
      fontSize: 14,
      lineHeight: 20,
      // paddingTop: 8,
      paddingLeft: 22,
      paddingRight: 22,
      paddingBottom: 17,
      color: Color.lightGray
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
