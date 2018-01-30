/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone, Email } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfilePhone from '../ProfileInfo/ProfilePhone';
import getStyles from './styles';

type Contact = {
  type: 'phone',
  value: Phone
} | {
  type: 'email',
  value: Email
};

type Props = {
  contact: Contact,
  onPress: (value: string) => mixed
};


class ProfileTouchableContact extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(
      context.theme,
      context.style.ProfileTouchableContact
    );
  }

  handlePress = () => {
    switch (this.props.contact.type) {
      case 'phone':
        this.props.onPress(this.props.contact.value.number);
        break;

      case 'email':
        this.props.onPress(this.props.contact.value.email);

        break;
      default:
    }
  };

  renderValue() {
    switch (this.props.contact.type) {
      case 'phone':
        return (
          <Text style={this.styles.text}>
            <ProfilePhone phone={this.props.contact.value} />
          </Text>
        );
      case 'email':
        return <Text style={this.styles.text}>{this.props.contact.value.email}</Text>;

      default:
        return null;
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        activeOpacity={0.8}
        hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }}
      >
        {this.renderValue()}
      </TouchableOpacity>
    );
  }
}

export default ProfileTouchableContact;
