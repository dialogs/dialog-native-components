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
    block: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2
    },
    blockHeader: {
      color: Color.gray,
      fontSize: 14
    },
    blockText: {
      flex: 1,
      color: Color.black,
      fontSize: 16
    },
    aboutText: {
      marginTop: 2,
      color: Color.black,
      fontSize: 18,
      lineHeight: 24
    },
    nickText: {
      color: Color.black,
      fontSize: 20
    },
    phoneText: {
      color: theme.color.primary || Color.primary,
      fontSize: 22
    },
    emailText: {
      color: theme.color.primary || Color.primary,
      fontSize: 18
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
