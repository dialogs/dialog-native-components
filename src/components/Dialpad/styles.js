/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff'
    },
    containerLandscape: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    fill: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    contacts: {
      flex: 1,
    },
    dialpad: {
      flex: 0,
      borderTopWidth: 1,
      borderColor: Color.border,
    },
    dialpadLandscape: {
      flexBasis: '50%',
      borderLeftWidth: 1,
      borderColor: Color.border,
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
