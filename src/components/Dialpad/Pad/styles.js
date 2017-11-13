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
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      padding: 20,
      height: 300,
      marginTop: -10,
      marginBottom: -10
    },
    horizontal: {
      flex: 1,
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      paddingTop: 30,
      paddingBottom: 30,
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
