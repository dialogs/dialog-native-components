/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import getStyles from './styles';

type Props = {
  title: string,
  icon?: ?string,
  onPress: () => mixed
};

class Button extends PureComponent {
  props: Props;
  styles: Object;

  static defailtProps = {
    wide: false
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Schedule);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
        <View style={this.styles.container}>
          <Text style={this.styles.text}>{this.props.title.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;
