/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { AvatarPlaceholder } from '@dlghq/dialog-types';

const placeholders = [
  'lblue',
  'blue',
  'purple',
  'red',
  'orange',
  'yellow',
  'green'
];

function getAvatarPlaceholder(id: number): AvatarPlaceholder {
  const idx = Math.abs(id) % placeholders.length;

  return placeholders[idx];
}

export default getAvatarPlaceholder;
