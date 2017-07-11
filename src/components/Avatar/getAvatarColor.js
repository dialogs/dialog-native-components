/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { AvatarPlaceholder } from '@dlghq/dialog-types';
import AvatarColors from './AvatarColors';

export type Color = {
  type: 'color',
  payload: string
};

export type Gradient = {
  type: 'gradient',
  payload: {
    from: string,
    to: string
  }
};

function getAvatarColor(placeholder: AvatarPlaceholder): Gradient {
  return {
    type: 'gradient',
    payload: {
      from: AvatarColors[placeholder].from,
      to: AvatarColors[placeholder].to
    }
  };
}

export default getAvatarColor;
