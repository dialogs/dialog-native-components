/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      backgroundColor: '#fff',
      borderBottomColor: Color.border,
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    containerOpened: {
      backgroundColor: '#F4F0F7'
    },
    cardHeading: {
      height: 74,
      flexDirection: 'row',
      flexWrap: 'nowrap'
    },
    cardHeadingText: {
      flex: 1,
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 13,
      paddingBottom: 13
    },
    title: {
      fontSize: 20,
      color: Color.text,
      lineHeight: 24,
      marginBottom: 4
    },
    address: {
      fontSize: 14,
      color: Color.textLight,
      lineHeight: 20
    },
    imageSmall: {
      flex: 0,
      width: 74,
      height: 74,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    imageLarge: {
      flex: 1,
      height: 200,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    description: {
      fontSize: 14,
      lineHeight: 20,
      paddingTop: 20,
      paddingLeft: 22,
      paddingRight: 22,
      paddingBottom: 17,
      color: Color.text
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
