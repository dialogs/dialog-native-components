/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Switch,
  Image
} from 'react-native';
import DiscoverCard from '../DiscoverCard/DiscoverCard';
import Icon from '../Icon/Icon';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileHeaderButton from '../ProfileHeader/ProfileHeaderButton';
import ProfileActions from '../ProfileActions/ProfileActions';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  data: {
    value: ?(Card[]),
    pending: boolean,
    error: ?string
  },
  onBack: () => mixed,
  onCall: () => mixed,
  onClear: (peer: Peer) => mixed,
  onDelete: (peer: Peer) => mixed,
  onBlock: (uid: number) => mixed,
  onUnblock: (uid: number) => mixed,
  onContactAdd: (uid: number) => mixed,
  onContactRemove: (uid: number) => mixed,
  onFavouriteChange: () => mixed,
  onNotificationsChange: (value: boolean) => mixed
};

class Profile extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Profile);
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

  renderProfileButtons = () => {
    const buttons = [
      {
        handler: () => console.log('Button pressed'),
        title: 'Write',
        id: 'write',
        icon: 'chat'
      },
      {
        handler: () => console.log('Button pressed'),
        title: 'Call',
        id: 'call',
        icon: 'call'
      }
    ];

    return buttons.map((button, index) => {
      return (
        <View style={this.styles.buttonWrapper}>
          <ProfileHeaderButton
            onPress={button.handler}
            key={button.id}
            title={button.title}
            icon={button.icon}
          />
        </View>
      );
    });
  };

  renderHeader() {
    const { data } = this.props;

    return (
      <ProfileHeader
        id={data.value.id}
        title={data.value.name}
        avatar={data.value.avatar}
        online={data.value.online}
        renderButtons={this.renderProfileButtons}
      />
    );
  }

  renderInfo() {
    const { data: { value: { about, nick, phones, emails } } } = this.props;

    return (
      <ProfileInfo about={about} nick={nick} phones={phones} emails={emails} />
    );
  }

  renderActions() {
    return (
      <ProfileActions
        isNotificationsEnabled={this.props.data.value.isNotificationsEnabled}
        onNotificationsChange={this.props.onNotificationsChange}
        onFavouriteToggle={this.props.onFavouriteToggle}
        onUserBlock={this.props.onUserBlock}
      />
    );
  }

  renderBlockUser() {
    return <View style={this.styles.blockWrapper} />;
  }

  render() {
    console.log('this.props', this.props);
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
        {this.renderActions()}
        {this.renderBlockUser()}
      </ScrollView>
    );
  }
}

export default Profile;
