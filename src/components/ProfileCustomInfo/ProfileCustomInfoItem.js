/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
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

  render() {
    return (
      <View style={this.styles.property}>
        <Text style={this.styles.propertyTitle}>{this.props.title}</Text>
        {this.props.children}
      </View>
    );
  }
}

export default ProfileCustomInfoItem;
