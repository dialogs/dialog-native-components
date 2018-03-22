/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Animated, Text } from 'react-native';
import Avatar from '../../Avatar/Avatar';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import ProfileHeaderTitle from '../../ProfileHeader/ProfileHeaderTitle';
import ProfileHeaderOnline from '../../ProfileHeader/ProfileHeaderOnline';
import Icon from '../../Icon/Icon';
import getStyles from './styles';
import { Color } from '../../../styles';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
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
  onSmallAvatarPress: () => mixed
};

class UserProfileSmallHeader extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  render() {
    const { avatar, title, placeholder } = this.props;
    const translateX = this.props.scrollY.interpolate({
      inputRange: [HEADER_SCROLL_DISTANCE - 30, HEADER_SCROLL_DISTANCE],
      outputRange: [7, 0],
      extrapolate: 'clamp'
    });
    const opacity = this.props.scrollY.interpolate({
      inputRange: [HEADER_SCROLL_DISTANCE - 30, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    return (
      <Animated.View
        style={[
          this.styles.smallHeader,
          { opacity, transform: [{ translateX }] }
        ]}
      >
        <TouchableOpacity
          onPress={this.props.onSmallAvatarPress}
          activeOpacity={0.8}
        >
          <Avatar
            image={avatar}
            placeholder={placeholder}
            title={title}
            size={40}
          />
        </TouchableOpacity>
        <Text style={this.styles.smallHeaderTitle}>{this.props.title}</Text>
      </Animated.View>
    );
  }
}

export default UserProfileSmallHeader;
