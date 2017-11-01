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
      height: 400,
      borderTopWidth: 1,
      borderColor: Color.border
    },
    pad: {
      flex: 1,
    },
    padFooter: {
      flex: 0,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      paddingBottom: 10
    },
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
