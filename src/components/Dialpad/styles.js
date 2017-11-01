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
      backgroundColor: Color.grayLighter
    },
    fill: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    contacts: {
      flex: 1
    },
    dialpad: {
      flex: 0,
      borderTopWidth: 1,
      borderColor: Color.border
    },
    pad: {
      height: 250,
      marginTop: -10,
      marginBottom: -10
    },
    padFooter: {
      flex: 0,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      padding: 12
    },
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
