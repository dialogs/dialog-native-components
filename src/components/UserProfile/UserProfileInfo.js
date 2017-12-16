/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone, Email } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Icon from '../Icon/Icon';
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

class UserProfileInfo extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  renderAbout() {
    if (!this.props.about) {
      return (
        <BlockText title="About">
          <View style={this.styles.aboutAddWrapper}>
            <Icon
              glyph="plus_outline"
              size={26}
              style={this.styles.aboutAddIcon}
            />
            <Text style={this.styles.aboutAddText}>
              {`Describe yourself`.toUpperCase()}
            </Text>
          </View>
        </BlockText>
      );
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
      return (
        <BlockText title="Nickname">
          <Text>
            You can choose a nickname, so other people will be able to find you
            by this nickname and contact you without knowing your phone number.
          </Text>
        </BlockText>
      );
    }

    return (
      <BlockText title="Nickname">
        <Text style={this.styles.nickText}>@{this.props.nick}</Text>
      </BlockText>
    );
  }

  render() {
    return (
      <Block style={this.styles.infoContainer}>
        {this.renderAbout()}
        {this.renderPhones()}
        {this.renderEmails()}
        {this.renderNick()}
      </Block>
    );
  }
}

export default UserProfileInfo;
