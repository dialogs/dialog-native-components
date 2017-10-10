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
      marginBottom: 16,
      elevation: 1
    },
    dayTitle: {
      height: 44,
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 12,
      paddingBottom: 12,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    dayTitleText: {
      flex: 1,
      color: theme.color.primary || Color.primary,
      fontSize: 14,
      lineHeight: 20
    },
    dayTitleArrow: {
      flex: 0,
      width: 12,
      height: 7,
      marginTop: 3,
      marginRight: 10
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
