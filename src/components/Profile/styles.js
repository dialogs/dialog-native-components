/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      flex: 1,
      backgroundColor: Color.grayLighter
    },
    fill: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: Color.grayLighter
    },
    errorWrapper: {
      padding: Padding.default,
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: Color.grayLighter
    },
    buttons: {
      marginTop: Padding.default * 2,
      paddingLeft: Padding.default * 2,
      paddingRight: Padding.default * 2,
      alignContent: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap'
    },
    buttonWrapper: {
      flex: 1
    },
    buttonDivider: {
      flex: 0,
      width: Padding.default
    },
    avatar: {
      marginBottom: Padding.small * 2
    },
    online: {
      marginTop: 4
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
