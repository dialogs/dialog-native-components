/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../../styles';

const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 60;
const AVATAR_SIZE = 120;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    fill: {
      flex: 1
    },
    scrollViewContent: {
      marginTop: HEADER_MAX_HEIGHT,
      backgroundColor: Color.grayLighter
    },
    avatarWrapper: {
      zIndex: 11,
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      borderRadius: AVATAR_SIZE,
      marginBottom: Padding.default
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
      zIndex: 10,
      top: Padding.small - 2,
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
    },
    header: {
      position: 'absolute',
      height: HEADER_MAX_HEIGHT,
      flex: 0,
      width: '100%',
      zIndex: 1,
      overflow: 'hidden'
    },
    headerContent: {
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    smallHeader: {
      position: 'absolute',
      zIndex: 10,
      paddingTop: 10,
      paddingBottom: 10,
      top: 0,
      left: 60,
      right: Padding.default * 2,
      height: HEADER_MIN_HEIGHT,
      flexDirection: 'row',
      alignContent: 'flex-start',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    smallHeaderTitle: {
      fontSize: 16,
      color: Color.white,
      marginLeft: Padding.small
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export {
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  AVATAR_SIZE,
  HEADER_SCROLL_DISTANCE
};

export default getStyles;
