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
    boolean: {
      color: theme.color.primary || Color.primary,
      fontSize: 18,
      lineHeight: 22
    },
    integer: {
      color: theme.color.primary || Color.primary,
      fontSize: 16,
      lineHeight: 22
    },
    string: {
      color: Color.black,
      fontSize: 16,
      lineHeight: 22
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
