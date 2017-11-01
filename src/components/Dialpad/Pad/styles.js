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
      padding: 20
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      // width: 300,
      paddingTop: 30,
      paddingBottom: 30,
    },
    buttonWrapper: {
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
      // backgroundColor: 'rgba(255,255,0,.4)'
    },
    button: {
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
    buttonValueWrapper: {
      height: 30
    },
    buttonValue: {
      fontSize: 22,
      fontWeight: '400',
      lineHeight: 30,
      color: theme.color.primary || Color.primary
    },
    buttonTextWrapper: {
      // marginTop: 2,
      height: 14
    },
    buttonText: {
      color: Color.gray,
      fontSize: 10,
      lineHeight: 14
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
