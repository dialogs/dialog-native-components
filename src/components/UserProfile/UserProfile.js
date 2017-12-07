/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, View, Text, ActivityIndicator, Image } from 'react-native';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';
import UserProfileActions from './UserProfileActions';
import CustomForm from '../CustomForm/CustomForm';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {};

class UserProfile extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  renderError() {
    return (
      <View style={this.styles.errorWrapper}>
        <Icon
          glyph="error"
          style={this.styles.errorIcon}
          width={64}
          height={64}
        />
        <Text style={this.styles.errorText}>{this.props.data.error}</Text>
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
    const { data } = this.props;

    return (
      <UserProfileHeader
        id={data.value.id}
        avatar={data.value.avatar}
        title={data.value.name}
        onAvatarChange={this.props.onAvatarChange}
      />
    );
  }

  renderInfo() {
    const { data: { value: { about, nick, phones, emails } } } = this.props;

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
    console.log('UserProfile', this.props);
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
