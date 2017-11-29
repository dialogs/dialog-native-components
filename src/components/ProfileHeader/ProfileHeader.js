/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { User } from '@dlghq/dialog-types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Avatar from '../Avatar/Avatar';
import getAvatarPlaceholder from '../../utils/getAvatarPlaceholder';
import Icon from '../Icon/Icon';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  avatar?: string,
  title: string,
  id: number,
  renderButtons?: () => mixed
};

class ProfileHeader extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      fadeAnim: new Animated.Value(0)
    };

    this.styles = getStyles(context.theme, context.style.ProfileHeader);
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  }

  renderAvatar() {
    const { avatar, title, id } = this.props;
    let { fadeAnim } = this.state;
    const placeholder = getAvatarPlaceholder(id);

    return (
      <Animated.View style={[this.styles.avatarWrapper, { opacity: fadeAnim }]}>
        <Avatar
          style={this.styles.avatar}
          image={avatar}
          placeholder={placeholder}
          title={title}
          size={120}
        />
      </Animated.View>
    );
  }

  renderTitle() {
    return (
      <View style={this.styles.titleWrapper}>
        <Text style={this.styles.title}>{this.props.title}</Text>
      </View>
    );
  }

  renderOnline() {
    return (
      <View style={this.styles.onlineWrapper}>
        <Text style={this.styles.online}>{this.props.online.message}</Text>
      </View>
    );
  }

  renderChildren() {
    if (!this.props.children) {
      return null;
    }

    return this.props.children;
  }

  renderBackground() {
    const gradient = this.context.theme.gradient;
    const radius = 1.5;
    const degree = 135;

    return (
      <LinearGradient
        colors={gradient}
        style={this.styles.background}
        start={{
          x: radius * Math.cos(degree),
          y: radius * Math.sin(degree)
        }}
        end={{
          x: radius * Math.cos(degree + 180),
          y: radius * Math.sin(degree + 180)
        }}
      />
    );
  }

  render() {
    return (
      <View style={this.styles.container}>
        {this.renderBackground()}
        {this.renderAvatar()}
        {this.renderTitle()}
        {this.renderOnline()}
        {this.renderChildren()}
      </View>
    );
  }
}

export default ProfileHeader;
