/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './styles';

type Props = {
  value: string,
  text: string,
  onPress: (value: string) => mixed
};

class PadButton extends PureComponent<Props> {
  context: Context;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Pad);
  }

  handleButtonPress = () => {
    this.props.onPress(this.props.value);
  };

  handleButtonLongPress = () => {
    if (this.props.value === '0') {
      this.props.onPress(this.props.text);
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <TouchableNativeFeedback
          onPress={this.handleButtonPress}
          onLongPress={this.handleButtonLongPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={this.styles.container} pointerEvents="box-only">
            <Text style={this.styles.value}>{this.props.value}</Text>
            <Text style={this.styles.text} numberOfLines={1}>
              {this.props.text.toUpperCase()}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default PadButton;
