/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Padding.large * 2,
      paddingBottom: Padding.default * 2
    },
    wrapper: {},
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    titleWrapper: {
      marginTop: Padding.large * 2
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
    buttons: {
      marginTop: Padding.default * 2,
      paddingLeft: Padding.large,
      paddingRight: Padding.large,
      flex: 0,
      alignContent: 'center',
      flexDirection: 'row'
    },
    button: {
      borderRadius: 6,
      backgroundColor: '#fff',
      height: 48,
      width: '100%',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonTextWrapper: {
      paddingTop: 14,
      paddingBottom: 14
    },
    buttonText: {
      color: theme.color.primary || Color.primary,
      fontSize: 18,
      lineHeight: 20
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
