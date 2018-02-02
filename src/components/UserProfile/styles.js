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
    backWrapper: {
      position: 'absolute',
      top: Padding.small,
      left: Padding.small,
      width: 48,
      height: 48,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 1000
    },
    backIcon: {
      tintColor: theme.color.white || Color.white
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
