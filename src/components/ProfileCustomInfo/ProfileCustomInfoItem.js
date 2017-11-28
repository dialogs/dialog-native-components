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

type Props = {};

class ProfileCustomInfoItem extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileCustomInfo);
  }

  renderTitle() {
    return <Text style={this.styles.propertyTitle}>{this.props.title}</Text>;
  }

  render() {
    console.log('ProfileCustomInfoItem', this.props);
    return (
      <View style={this.styles.property}>
        {this.renderTitle()}
        {this.props.children}
      </View>
    );
  }
}

export default ProfileCustomInfoItem;
