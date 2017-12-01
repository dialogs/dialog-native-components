/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Icon from '../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './styles';
import { Color } from '../../styles';

type Theme = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';

type Props = {
  text?: string,
  icon?: string,
  iconColor?: Theme,
  textColor?: Theme,
  style?: any
};

class BlockAction extends PureComponent<Props> {
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

    this.styles = getStyles(context.theme, context.style.BlockAction);
  }

  renderIcon() {
    if (!this.props.icon) {
      return <View style={this.styles.spacer} />;
    }

    return (
      <Icon
        glyph={this.props.icon}
        size={26}
        style={[
          this.styles.icon,
          { tintColor: this.props.iconColor || Color.gray }
        ]}
      />
    );
  }

  renderText() {
    return (
      <Text
        style={[
          this.styles.text,
          { color: this.props.textColor || Color.black }
        ]}
        numberOfLines={1}
      >
        {this.props.text}
      </Text>
    );
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View
          style={[this.styles.container, this.props.style]}
          pointerEvents="box-only"
        >
          {this.renderIcon()}
          {this.renderText()}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default BlockAction;
