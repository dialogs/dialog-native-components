/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    wrapper: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '33%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      padding: 10,
      marginTop: -5,
      marginBottom: -5,
      marginLeft: -5,
      marginRight: -5,
      // backgroundColor: 'rgba(255,0,240,.4)'
    },
    container: {
      // borderWidth: StyleSheet.hairlineWidth,
      // borderColor: Color.grayLight,
      width: 50,
      height: 50,
      borderRadius: 500,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    small: {
      width: 40,
      height: 40
    },
    valueWrapper: {
      height: 30
    },
    value: {
      fontSize: 22,
      fontWeight: '400',
      lineHeight: 30,
      color: theme.color.primary || Color.primary
    },
    textWrapper: {
      // marginTop: 2,
      height: 14
    },
    text: {
      color: Color.gray,
      fontSize: 10,
      lineHeight: 14
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
