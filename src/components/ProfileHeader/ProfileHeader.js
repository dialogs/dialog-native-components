/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { User } from '@dlghq/dialog-types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  avatar?: string,
  title: string,
  id: number,
  renderButtons?: () => mixed
};

class ProfileHeader extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileHeader);
  }

  renderBackground() {
    const gradient = this.context.theme.gradient;
    const radius = 3;
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
        {this.props.children}
      </View>
    );
  }
}

export default ProfileHeader;
