/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { UserProfileProps as Props } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, View, Text, ActivityIndicator, Image } from 'react-native';
import Icon from '../Icon/Icon';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';
import UserProfileActions from './UserProfileActions';
import CustomForm from '../CustomForm/CustomForm';
import getStyles from './styles';
import { Color } from '../../styles';

class UserProfile extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  renderError() {
    const { data: {error } } = this.props;

    if (!error) {
      return null;
    }

    return (
      <View style={this.styles.errorWrapper}>
        <Icon
          glyph="error"
          style={this.styles.errorIcon}
          width={64}
          height={64}
        />
        <Text style={this.styles.errorText}>{typeof error === 'string' ? error : error.message}</Text>
      </View>
    );
  }

  renderPending() {
    return (
      <View style={this.styles.fill}>
        <ActivityIndicator
          size="large"
          color={this.context.theme.color.primary || Color.primary}
        />
      </View>
    );
  }

  renderHeader() {
    const { data: { value: { profile: { id, avatar, name } } } } = this.props;

    return (
      <UserProfileHeader
        id={id}
        avatar={avatar}
        title={name}
        onAvatarChange={this.props.onAvatarChange}
      />
    );
  }

  renderInfo() {
    const { data: { value: { profile: { about, nick, phones, emails } } } } = this.props;

    return (
      <UserProfileInfo
        about={about}
        nick={nick}
        phones={phones}
        emails={emails}
      />
    );
  }

  renderCustomForm() {
    const { data: { value: { custom } } } = this.props;

    return (
      <CustomForm
        schema={custom.schema}
        value={custom.value}
        onChange={this.props.onCustomInfoChange}
      />
    );
  }

  renderActions() {
    return <UserProfileActions />;
  }

  render() {
    const { data } = this.props;

    if (data.error) {
      return this.renderError();
    }

    if (data.pending) {
      return this.renderPending();
    }

    return (
      <ScrollView style={this.styles.container}>
        {this.renderHeader()}
        {this.renderInfo()}
        {this.renderCustomForm()}
        {this.renderActions()}
      </ScrollView>
    );
  }
}

export default UserProfile;
