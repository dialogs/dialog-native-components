/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

function getAvatarText(title: string): string {
  const titleArray = title.trim().split(' ');
  if (titleArray.length > 1) {
    return `${titleArray[0][0]}${titleArray[1][0]}`;
  }

  return title[0];
}

export default getAvatarText;
