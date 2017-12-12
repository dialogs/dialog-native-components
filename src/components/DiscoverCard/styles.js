/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../types';
import { Platform, StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      borderRadius: 2,
      backgroundColor: Color.white,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(0, 0, 0, 0.06)',
      marginBottom: 0,
      ...Platform.select({
        ios: {
          shadowColor: Color.black,
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowRadius: 2,
          shadowOpacity: 0.08
        },
        android: {
          elevation: 2
        }
      })
    },
    body: {
      padding: Padding.default,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'center'
    },
    info: {
      flex: 1
    },
    titleWrapper: {
      display: 'flex',
      flexDirection: 'row'
    },
    title: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '500',
      color: Color.gray,
      flex: 1
    },
    titleIcon: {
      flex: 0,
      marginRight: 4,
      tintColor: Color.gray
    },
    shortname: {
      lineHeight: 20,
      color: Color.grayLight
    },
    description: {
      marginTop: 6,
      fontSize: 14,
      lineHeight: 16,
      color: Color.gray
    },
    avatar: {
      marginRight: Padding.default
    },
    footer: {
      padding: Padding.default,
      minHeight: 40,
      display: 'flex',
      flexDirection: 'row',
      flex: 1
    },
    members: {
      flex: 0,
      width: 60,
      minHeight: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    },
    membersIcon: {
      flex: 0,
      marginRight: 4
    },
    membersText: {
      flex: 0,
      fontSize: 14,
      lineHeight: 20,
      color: Color.gray,
      fontWeight: '500'
    },
    creator: {
      flex: 1
    },
    creatorText: {
      fontSize: 14,
      lineHeight: 20,
      color: Color.gray,
      textAlign: 'right'
    },
    creatorName: {
      fontWeight: '500'
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
