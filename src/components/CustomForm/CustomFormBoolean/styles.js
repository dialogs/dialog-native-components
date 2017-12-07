/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      paddingTop: Padding.large,
      paddingBottom: Padding.large,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2
    },
    text: {
      flex: 1,
      fontSize: 16,
      color: Color.black
    },
    switch: {
      position: 'absolute',
      top: Padding.default + 2,
      right: Padding.default * 2 - 6
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
