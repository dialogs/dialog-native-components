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
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Padding.large * 2,
      paddingBottom: Padding.default * 2
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    titleWrapper: {
      marginTop: Padding.small * 2
    },
    title: {
      fontSize: 28,
      color: '#fff'
    },
    onlineWrapper: {
      marginTop: 2
    },
    online: {
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.5)'
    },
    button: {
      borderRadius: 6,
      backgroundColor: '#fff',
      height: 44,
      width: '100%',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonTextWrapper: {
      paddingTop: 8,
      paddingBottom: 8,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      flex: 0,
      color: theme.color.primary || Color.primary,
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '500'
    },
    buttonIcon: {
      flex: 0,
      marginRight: Padding.default / 2
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
