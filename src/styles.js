/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type {
  Color as ColorType,
  Padding as PaddingType,
  Gradient as GradientType
} from './types';

const Color: ColorType = {
  primary: '#4E0D9A',
  danger: '#e22d44',
  warning: '#ffae00',
  success: '#3bbf51',
  info: '#5856d6',

  black: '#000',
  grayDark: '#333333',
  gray: '#727272',
  grayLight: '#acacac',
  grayLighter: '#EDEDF2',
  white: '#fff',

  border: '#e0e0e0'
};

const Padding: PaddingType = {
  small: 8,
  default: 12,
  large: 16
};

const Gradient: GradientType = ['#79149A', '#400B9A'];

export { Color, Padding, Gradient };
