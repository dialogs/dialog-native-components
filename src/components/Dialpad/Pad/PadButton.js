/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './styles';
import { Color } from '../../../styles';

type Props = {
  value: string,
  text: string,
  onPress: (value: string) => mixed
};

type State = {};

class PadButton extends PureComponent {
  props: Props;
  state: State;
  context: Context;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Contacts);
  }

  handleButtonPress = () => {
    this.props.onPress(this.props.value);
  };

  renderValue() {
    return (
      <View style={this.styles.buttonValueWrapper}>
        <Text style={this.styles.buttonValue}>
          {this.props.value}
        </Text>
      </View>
    );
  }

  renderText() {
    return (
      <View style={this.styles.buttonTextWrapper}>
        <Text style={this.styles.buttonText}>
          {this.props.text.toUpperCase()}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={this.styles.buttonWrapper}>
        <TouchableNativeFeedback
          onPress={this.handleButtonPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={this.styles.button} pointerEvents='box-only'>
            {this.renderValue()}
            {this.renderText()}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default PadButton;
