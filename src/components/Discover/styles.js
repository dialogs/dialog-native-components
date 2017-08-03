/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      flex: 1
    },
    header: {
      padding: Padding.default,
      backgroundColor: theme.color.primary || Color.primary,
    },
    title: {
      margin: 0,
      fontSize: 18,
      color: Color.white,
      fontWeight: '500',
      lineHeight: 22
    },
    subtitle: {
      fontSize: 14,
      lineHeight: 18,
      color: Color.grayLighter
    },
    cards: {
      flex: 1,
      backgroundColor: Color.grayLighter
    },
    card: {
      marginTop: 0,
      marginBottom: Padding.default,
      marginLeft: Padding.default,
      marginRight: Padding.default,
    },
    firstCard: {
      marginTop: Padding.default
    },
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
