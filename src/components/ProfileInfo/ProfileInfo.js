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
import { Color } from '../../styles';

type Props = {
  nick: ?string,
  about: ?string,
  phones: Phone[],
  emails: Email[]
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
      <BlockText title="About">
        <Text style={this.styles.aboutText}>{this.props.about}</Text>
      </BlockText>
    );
  }

  renderPhones() {
    const { phones } = this.props;
    if (!phones && !phones.length) {
      return null;
    }

    const children = phones.map(phone => {
      return <Text key={phone.number}>{phone.number}</Text>;
    });

    return (
      <BlockText title="Phone">
        <Text style={this.styles.phoneText}>{children}</Text>
      </BlockText>
    );
  }

  renderEmails() {
    const { emails } = this.props;
    if (!emails && !emails.length) {
      return null;
    }

    const children = emails.map(email => {
      return <Text key={email.email}>{email.email}</Text>;
    });

    return (
      <BlockText title="Email">
        <Text style={this.styles.emailText}>{children}</Text>
      </BlockText>
    );
  }

  renderNick() {
    if (!this.props.nick) {
      return null;
    }

    return (
      <BlockText title="Nickname">
        <Text style={this.styles.nickText}>@{this.props.nick}</Text>
      </BlockText>
    );
  }

  render() {
    return (
      <Block style={this.styles.container}>
        {this.renderNick()}
        {this.renderAbout()}
        {this.renderPhones()}
        {this.renderEmails()}
      </Block>
    );
  }
}

export default ProfileInfo;
