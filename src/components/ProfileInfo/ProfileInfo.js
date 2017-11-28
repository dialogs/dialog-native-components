/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { User } from '@dlghq/dialog-types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import ProfileBlock from '../Profile/ProfileBlock';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  avatar?: string,
  title: string,
  id: number,
  renderButtons?: () => mixed
};

class ProfileInfo extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileInfo);
  }

  renderAbout() {
    if (!this.props.about) {
      return null;
    }

    return (
      <View style={this.styles.block}>
        <Text style={this.styles.blockHeader}>About</Text>
        <Text style={this.styles.aboutText}>{this.props.about}</Text>
      </View>
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
      <View style={this.styles.block}>
        <Text style={this.styles.blockHeader}>Phone</Text>
        <Text style={this.styles.phoneText}>{children}</Text>
      </View>
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
      <View style={this.styles.block}>
        <Text style={this.styles.blockHeader}>Emails</Text>
        <Text style={this.styles.emailText}>{children}</Text>
      </View>
    );
  }

  renderNick() {
    if (!this.props.nick) {
      return null;
    }

    return (
      <View style={this.styles.block}>
        <Text style={this.styles.blockHeader}>Nickname</Text>
        <Text style={this.styles.nickText}>@{this.props.nick}</Text>
      </View>
    );
  }

  render() {
    console.log('this.styles.container', this.styles.container);
    return (
      <ProfileBlock style={this.styles.container}>
        {this.renderNick()}
        {this.renderAbout()}
        {this.renderPhones()}
        {this.renderEmails()}
      </ProfileBlock>
    );
  }
}

export default ProfileInfo;
