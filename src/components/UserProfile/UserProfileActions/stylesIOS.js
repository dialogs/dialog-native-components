/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      flex: 1,
      backgroundColor: Color.grayLighter
    },
    infoContainer: {
      paddingTop: Padding.small,
      paddingBottom: Padding.small
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
    avatarWrapper: {
      borderRadius: 120,
      marginBottom: Padding.small * 2
    },
    cameraWrapper: {
      position: 'absolute',
      bottom: -4,
      right: -4,
      backgroundColor: theme.color.primary || Color.primary,
      borderRadius: 100,
      padding: Padding.small
    },
    cameraIcon: {
      tintColor: Color.white
    },
    aboutText: {
      color: Color.black,
      fontSize: 16,
      lineHeight: 24
    },
    nickText: {
      color: Color.black,
      fontSize: 18,
      lineHeight: 26
    },
    addWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      paddingTop: Padding.small
    },
    addIcon: {
      flex: 0,
      marginRight: Padding.small,
      tintColor: theme.color.primary || Color.primary
    },
    addText: {
      flex: 1,
      fontSize: 14,
      lineHeight: 24,
      color: theme.color.primary || Color.primary
    },
    hintText: {
      fontSize: 14,
      lineHeight: 20,
      marginTop: Padding.small,
      color: Color.gray
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
