/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
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
      paddingLeft: Padding.large,
      paddingRight: Padding.large,
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
    // buttonsNew: {
    //   alignContent: 'center',
    //   flexDirection: 'row',
    //   flexWrap: 'nowrap',
    //   marginTop: Padding.large * 2,
    //   marginBottom: Padding.default
    // },
    // button: {
    //   flex: 1,
    //   alignContent: 'center',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   flexDirection: 'column',
    //   padding: Padding.small,
    // },
    // buttonIcon: {
    //   tintColor: Color.white,
    //   marginBottom: Padding.small / 2
    // },
    // buttonText: {
    //   fontSize: 16,
    //   color: Color.white
    // },
    // divider: {
    //   flex: 0,
    //   marginTop: Padding.small,
    //   marginBottom: Padding.small,
    //   width: StyleSheet.hairlineWidth,
    //   backgroundColor: 'rgba(255,255,255,.6)'
    // }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
