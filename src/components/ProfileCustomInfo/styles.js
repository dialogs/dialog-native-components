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
    property: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2
    },
    propertyTitle: {
      color: Color.gray,
      fontSize: 14
    },
    booleanValue: {
      color: theme.color.primary || Color.primary,
      fontSize: 22,
      lineHeight: 24
    },
    integerValue: {
      color: theme.color.primary || Color.primary,
      fontSize: 18,
      lineHeight: 24
    },
    stringValue: {
      marginTop: 2,
      color: Color.black,
      fontSize: 18,
      lineHeight: 24
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
