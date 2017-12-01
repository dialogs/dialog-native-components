/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small
    },
    aboutText: {
      color: Color.black,
      fontSize: 16,
      lineHeight: 24
    },
    nickText: {
      color: Color.black,
      fontSize: 20
    },
    phoneText: {
      color: theme.color.primary || Color.primary,
      fontSize: 20
    },
    emailText: {
      color: theme.color.primary || Color.primary,
      fontSize: 18
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
