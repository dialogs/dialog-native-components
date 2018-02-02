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
    },
    buttons: {
      flex: 1,
      alignItems: 'flex-start',
      alignContent: 'center',
      justifyContent: 'center'
    },
    button: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small,
      paddingLeft: Padding.default,
      paddingRight: Padding.default,
      borderRadius: 3,
      backgroundColor: 'rgba(0,0,0,.05)',
      marginRight: Padding.small
    },
    buttonSave: {
      color: Color.success
    },
    buttonCancel: {
      color: Color.gray
    },
    buttonText: {
      fontSize: 13
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
