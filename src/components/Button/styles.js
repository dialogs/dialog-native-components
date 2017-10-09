/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      height: 50,
      backgroundColor: Color.primary,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      elevation: 1
    },
    text: {
      color: '#fff',
      fontSize: 14
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
