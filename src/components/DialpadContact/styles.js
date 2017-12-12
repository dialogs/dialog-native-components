/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { Platform, StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    wrapper: {
      ...Platform.select({
        android: {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: Color.border
        }
      })
    },
    container: {
      flex: 1,
      height: 64,
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      borderRadius: 500
    },
    avatarWrapper: {
      paddingLeft: 22,
      paddingTop: 10,
      paddingBottom: 10
    },
    avatar: {
      flex: 0,
      marginRight: Padding.default
    },
    info: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 22,
      ...Platform.select({
        ios: {
          borderBottomWidth: 1,
          borderBottomColor: Color.border
        }
      })
    },
    titleWrapper: {
      marginTop: 3,
      flex: 0
    },
    title: {
      fontSize: 16,
      color: Color.black,
      lineHeight: 20
    },
    phoneWrapper: {
      marginBottom: 3,
      flex: 0
    },
    phone: {
      fontSize: 12,
      color: Color.gray,
      lineHeight: 18
    },
    phoneHighlight: {
      color: Color.primary
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
