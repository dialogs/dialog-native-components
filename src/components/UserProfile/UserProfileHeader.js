/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Avatar from '../Avatar/Avatar';
import getAvatarPlaceholder from '../../utils/getAvatarPlaceholder';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileHeaderTitle from '../ProfileHeader/ProfileHeaderTitle';
import ProfileHeaderOnline from '../ProfileHeader/ProfileHeaderOnline';
import Icon from '../Icon/Icon';
import getStyles from './styles';
import { Color } from '../../styles';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';

type Props = {
  avatar: ?string,
  title: string,
  id: number,
  onAvatarChange: () => mixed,
  onBackPress: () => mixed
};

class UserProfileHeader extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  renderBackButton() {
    return (
      <View style={this.styles.backWrapper}>
        <TouchableNativeFeedback
          onPress={this.props.onBackPress}
          background={TouchableNativeFeedback.Ripple(
            'rgba(255,255,255,.5)',
            true
          )}
        >
          <Icon glyph="arrow_back" size={28} style={this.styles.backIcon} />
        </TouchableNativeFeedback>
      </View>
    );
  }

  renderAvatar() {
    const { avatar, title, id } = this.props;
    const placeholder = getAvatarPlaceholder(id);

    return (
      <TouchableOpacity
        onPress={this.props.onAvatarChange}
        activeOpacity={0.8}
        style={this.styles.avatarWrapper}
      >
        <Avatar
          style={this.styles.avatar}
          image={avatar}
          placeholder={placeholder}
          title={title}
          size={120}
        />
        <View style={this.styles.cameraWrapper}>
          <Icon glyph="camera" size={24} style={this.styles.cameraIcon} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ProfileHeader>
        {this.renderBackButton()}
        {this.renderAvatar()}
        <ProfileHeaderTitle title={this.props.title} />
      </ProfileHeader>
    );
  }
}

export default UserProfileHeader;
