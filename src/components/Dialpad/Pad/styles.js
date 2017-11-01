/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      width: 300,
      paddingTop: 10,
      paddingBottom: 10,
    },
    buttonWrapper: {
      flexGrow: 0,
      flexShrink: 0,
      // flexBasis: '33%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 6,
      paddingBottom: 6,
    },
    button: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Color.grayLight,
      width: 64,
      height: 64,
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
      fontSize: 20,
      fontWeight: '200',
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
