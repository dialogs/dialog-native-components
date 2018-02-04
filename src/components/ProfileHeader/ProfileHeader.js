/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './styles';
import { Color, Gradient } from '../../styles';

type Props = {
  children: *
};

class ProfileHeader extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileHeader);
  }

  renderBackground() {
    const gradient = this.context.theme.gradient || Gradient;
    const radius = 2.5;
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
