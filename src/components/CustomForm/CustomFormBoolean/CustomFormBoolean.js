/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, Switch } from 'react-native';
import Icon from '../../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './styles';
import { Color } from '../../../styles';

type Theme = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';

type Props = {
  text?: string,
  icon?: string,
  value: boolean,
  iconColor?: Theme,
  textColor?: Theme,
  style?: any
};

class CustomFormBoolean extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    theme: 'default',
    iconTheme: 'default'
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.CustomFormBoolean);
  }

  handlePress = () => {
    this.props.onChange(this.props.id, !this.props.value);
  };

  handleSwitcherChange = value => {
    this.props.onChange(this.props.id, value);
  };

  render() {
    return (
      <View>
        <TouchableNativeFeedback onPress={this.handlePress}>
          <View style={this.styles.container} pointerEvents="box-only">
            <Text style={this.styles.text} numberOfLines={1}>
              {this.props.title}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Switch
          style={this.styles.switch}
          onValueChange={this.handleSwitcherChange}
          value={this.props.value}
        />
      </View>
    );
  }
}

export default CustomFormBoolean;
