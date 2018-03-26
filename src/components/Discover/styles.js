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
      flex: 1
    },
    title: {
      margin: 0,
      fontSize: 18,
      color: Color.white,
      fontWeight: '500',
      lineHeight: 22
    },
    cards: {
      flex: 1,
      backgroundColor: Color.grayLighter
    },
    card: {
      margin: 0,
      // marginBottom: Padding.default,
      // marginLeft: Padding.default,
      // marginRight: Padding.default
    },
    firstCard: {
      // marginTop: Padding.default
    },
    fill: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    textHeading: {
      fontSize: 18,
      marginBottom: 6,
      fontWeight: '500'
    },
    text: {
      fontSize: 14
    },
    errorWrapper: {
      padding: Padding.default,
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    errorIcon: {
      marginBottom: Padding.default,
      tintColor: theme.color.danger || Color.danger
    },
    errorText: {
      textAlign: 'center',
      fontSize: 20,
      color: theme.color.danger || Color.danger
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
