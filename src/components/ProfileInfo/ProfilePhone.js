/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone } from '@dlghq/dialog-types';
import React from 'react';
import { Text } from 'react-native';
import PhoneNumber from 'awesome-phonenumber';

type Props = {
  phone: Phone
};

function formatPhone(phone: string) {
  try {
    return PhoneNumber(phone).getNumber('international');
  } catch (e) {
    console.error(e);
    return phone;
  }
}

function ProfilePhone(props: Props) {
  return (
    <Text>
      {formatPhone(props.phone.number)}
    </Text>
  );
}

export default ProfilePhone;
