/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone, Email } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Block from '../Block/Block';
import BlockText from '../BlockText/BlockText';
import getStyles from './styles';
import ProfileTouchableContact from '../ProfileTouchableContact/ProfileTouchableContact';
import { Color } from '../../styles';

type Props = {
  nick: ?string,
  about: ?string,
  phones: Phone[],
  emails: Email[],
  onEmailPress: (phone: string) => mixed,
  onPhonePress: (email: string) => mixed
};

class ProfileInfo extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileInfo);
  }

  renderAbout() {
    if (!this.props.about) {
      return null;
    }

    return (
      <BlockText title="Profile.about">
        <Text style={this.styles.aboutText}>{this.props.about}</Text>
      </BlockText>
    );
  }

  renderNick() {
    if (!this.props.nick) {
      return null;
    }

    return (
      <BlockText title="Profile.nick">
        <Text style={this.styles.nickText}>@{this.props.nick}</Text>
      </BlockText>
    );
  }

  renderPhones() {
    const { phones } = this.props;

    if (!phones || !phones.length) {
      return null;
    }

    const children = phones.map(phone => {
      return (
        <ProfileTouchableContact
          key={phone.number}
          contact={{
            type: 'phone',
            value: phone
          }}
          onPress={this.props.onPhonePress}
        />
      );
    });

    return <BlockText title="Profile.phone">{children}</BlockText>;
  }

  renderEmails() {
    const { emails } = this.props;
    if (!emails || !emails.length) {
      return null;
    }

    const children = emails.map(email => {
      return (
        <ProfileTouchableContact
          key={email.email}
          contact={{
            type: 'email',
            value: email
          }}
          onPress={this.props.onEmailPress}
        />
      );
    });

    return (
      <BlockText title="Profile.email" borderless>
        {children}
      </BlockText>
    );
  }

  render() {
    return (
      <Block>
        {this.renderAbout()}
        {this.renderNick()}
        {this.renderPhones()}
        {this.renderEmails()}
      </Block>
    );
  }
}

export default ProfileInfo;
