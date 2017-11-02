/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      flex: 0,
      height: 70,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    small: {
      height: 60
    },
    number: {
      fontSize: 26,
      color: Color.gray,
      letterSpacing: 2
    },
    numberSmall: {
      fontSize: 22,
    },
    backspace: {
      position: 'absolute',
      top: 20,
      right: 20,
      width: 32,
      height: 32,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    backspaceIcon: {
      marginLeft: -2,
      width: 32,
      height: 32
    },
    backspaceSmall: {
      top: 17,
      width: 28,
      height: 28,
    },
    backspaceIconSmall: {
      width: 28,
      height: 28
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
