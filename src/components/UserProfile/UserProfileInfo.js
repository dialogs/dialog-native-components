/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone, Email } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon/Icon';
import Block from '../Block/Block';
import BlockText from '../BlockText/BlockText';
import ProfileTouchableContact from '../ProfileTouchableContact/ProfileTouchableContact';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  nick: ?string,
  about: ?string,
  phones: Phone[],
  emails: Email[],
  onEmailPress: (phone: string) => mixed,
  onPhonePress: (email: string) => mixed,
  onAboutPress: () => mixed,
  onNickPress: () => mixed
};

class UserProfileInfo extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  renderAbout() {
    if (!this.props.about) {
      const { formatText } = this.context.l10n;

      return (
        <BlockText title="Profile.about">
          <TouchableOpacity
            onPress={this.props.onAboutPress}
            activeOpacity={0.8}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          >
            <View style={this.styles.addWrapper}>
              <Icon
                glyph="plus_outline"
                size={24}
                style={this.styles.addIcon}
              />
              <Text style={this.styles.addText}>
                {formatText('Profile.about_add_button').toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
        </BlockText>
      );
    }

    return (
      <BlockText title="Profile.about">
        <TouchableOpacity
          onPress={this.props.onAboutPress}
          activeOpacity={0.8}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <Text style={this.styles.aboutText}>{this.props.about}</Text>
        </TouchableOpacity>
      </BlockText>
    );
  }

  renderNick() {
    if (!this.props.nick) {
      const { formatText } = this.context.l10n;

      return (
        <BlockText title="Profile.nick">
          <TouchableOpacity
            onPress={this.props.onNickPress}
            activeOpacity={0.8}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          >
            <View style={this.styles.addWrapper}>
              <Icon
                glyph="plus_outline"
                size={24}
                style={this.styles.addIcon}
              />
              <Text style={this.styles.addText}>
                {formatText('Profile.nick_add_button').toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={this.styles.hintText}>
            {formatText('Profile.nick_hint')}
          </Text>
        </BlockText>
      );
    }

    return (
      <BlockText title="Profile.nick">
        <TouchableOpacity
          onPress={this.props.onNickPress}
          activeOpacity={0.8}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <Text style={this.styles.nickText}>@{this.props.nick}</Text>
        </TouchableOpacity>
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

    return <BlockText title="Profile.email">{children}</BlockText>;
  }

  render() {
    return (
      <Block style={this.styles.infoContainer}>
        {this.renderAbout()}
        {this.renderNick()}
        {this.renderPhones()}
        {this.renderEmails()}
      </Block>
    );
  }
}

export default UserProfileInfo;
