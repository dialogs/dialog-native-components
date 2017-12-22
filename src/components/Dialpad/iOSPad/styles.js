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
      flex: 1
    },
    numberContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center'
    },
    numberValue: {
      textAlign: 'center',
      fontSize: 26,
      color: Color.gray,
      letterSpacing: 2
    },
    buttonsContainer: {
      flex: 4,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    footerContainer: {
      flex: 1,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    footerBackspace: {
      position: 'absolute',
      left: '80%',
      top: '50%',
      marginTop: -20,
      marginLeft: -20
    },
    footerBackspaceIcon: {
      width: 40,
      height: 40,
      tintColor: Color.gray
    },
    footerCallButton: {
      flex: 0,
      backgroundColor: theme.color.success || Color.success,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 500,
      width: 64,
      height: 64
    },
    footerCallButtonIcon: {
      width: 28,
      height: 28,
      tintColor: Color.white
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
