/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import { Color } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    containerLandscape: {
      flex: 1,
      flexDirection: 'row'
    },
    fill: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    empty: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      padding: 22,
      height: 100
    },
    emptyText: {
      fontSize: 18,
      color: Color.gray
    },
    contacts: {
      flex: 1
    },
    dialpad: {
      flex: 2,
      borderTopWidth: 1,
      borderColor: Color.border,
      backgroundColor: '#fff'
    },
    dialpadLandscape: {
      flexBasis: '50%',
      borderLeftWidth: 1,
      borderColor: Color.border
    },
    contactsDisabledLandscape: {
      flex: 1
    },
    contactsDisabled: {
      flex: 0
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
