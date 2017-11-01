/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    wrapper: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Color.border,
    },
    container: {
      flex: 1,
      height: 64,
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      borderRadius: 500,
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 10,
      paddingBottom: 10,
    },
    avatar: {
      flex: 0,
      marginRight: Padding.default
    },
    info: {
      flex: 1,
      height: 44,
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      justifyContent: 'center',
    },
    titleWrapper: {
      flex: 0
    },
    title: {
      fontSize: 16,
      color: Color.black,
      lineHeight: 20
    },
    phoneWrapper: {
      flex: 0
    },
    phone: {
      fontSize: 12,
      color: Color.gray,
      lineHeight: 18
    },
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
