/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Animated, Text } from 'react-native';
import Avatar from '../../Avatar/Avatar';
import getAvatarPlaceholder from '../../../utils/getAvatarPlaceholder';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import ProfileHeaderTitle from '../../ProfileHeader/ProfileHeaderTitle';
import ProfileHeaderOnline from '../../ProfileHeader/ProfileHeaderOnline';
import Icon from '../../Icon/Icon';
import getStyles from './styles';
import { Color } from '../../../styles';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import UserProfileSmallHeader from './UserProfileSmallHeader';
import {
  HEADER_SCROLL_DISTANCE,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  AVATAR_SIZE
} from './styles';

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

  renderText() {
    return <ProfileHeaderTitle title={this.props.title} />;
  }

  renderSmallHeader() {
    // if (!this.props.isSmallHeaderShowed) {
    //   return null;
    // }

    const { avatar, title, id } = this.props;
    const placeholder = getAvatarPlaceholder(id);

    return (
      <UserProfileSmallHeader
        image={avatar}
        placeholder={placeholder}
        title={title}
        scrollY={this.props.scrollY}
      />
    );
  }

  renderHeader() {
    const headerTranslateY = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp'
    });
    const scale = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.7],
      extrapolate: 'clamp'
    });
    const translateY = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, HEADER_SCROLL_DISTANCE * 0.75],
      extrapolate: 'clamp'
    });
    const opacity = this.props.scrollY.interpolate({
      inputRange: [30, HEADER_SCROLL_DISTANCE * 0.9],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <Animated.View
        style={[
          this.styles.header,
          { transform: [{ translateY: headerTranslateY }] }
        ]}
      >
        <ProfileHeader>
          <Animated.View
            style={[
              this.styles.headerContent,
              { opacity, transform: [{ scale }, { translateY }] }
            ]}
          >
            {this.renderAvatar()}
            {this.renderText()}
          </Animated.View>
        </ProfileHeader>
      </Animated.View>
    );
  }

  render() {
    return (
      <View>
        {this.renderHeader()}
        {this.renderBackButton()}
        {this.renderSmallHeader()}
      </View>
    );
  }
}

export default UserProfileHeader;
