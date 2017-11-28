/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    block: {
      paddingTop: Padding.large,
      paddingBottom: Padding.large,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      alignContent: 'flex-start',
      justifyContent: 'center'
    },
    switch: {
      position: 'absolute',
      top: Padding.large,
      right: Padding.default * 2
    },
    icon: {
      width: 28,
      height: 28,
      marginRight: Padding.large
    },
    text: {
      flex: 1,
      fontSize: 16,
      color: Color.black
    },
    favText: {
      flex: 1,
      fontSize: 16,
      color: theme.color.warning || Color.warning
    },
    blockText: {
      flex: 1,
      fontSize: 16,
      color: theme.color.danger || Color.danger
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
