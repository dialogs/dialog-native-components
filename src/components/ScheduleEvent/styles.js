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
    header: {
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 13,
      paddingBottom: 13
    },
    title: {
      fontSize: 20,
      color: Color.black,
      lineHeight: 24,
      marginBottom: 4
    },
    titleLocation: {
      color: theme.color.primary || Color.primary
    },
    subtitle: {
      height: 20,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    subtitleText: {
      flex: 1,
      fontSize: 14,
      color: Color.gray,
      lineHeight: 20
    },
    subtitleMarker: {
      width: 11,
      height: 16,
      flex: 0
    },
    description: {
      fontSize: 14,
      lineHeight: 20,
      paddingTop: 0,
      paddingLeft: 22,
      paddingRight: 22,
      paddingBottom: 13,
      color: Color.text
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
