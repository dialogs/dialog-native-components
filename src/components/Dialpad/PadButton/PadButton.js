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

type Props = {
  value: string,
  text: string,
  small: boolean,
  onPress: (value: string) => mixed
};

class PadButton extends PureComponent {
  props: Props;
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
      <View style={this.styles.valueWrapper}>
        <Text style={this.styles.value}>
          {this.props.value}
        </Text>
      </View>
    );
  }

  renderText() {
    return (
      <View style={this.styles.textWrapper}>
        <Text style={this.styles.text}>
          {this.props.text.toUpperCase()}
        </Text>
      </View>
    );
  }

  render() {
    const { small } = this.props;
    const style = [this.styles.container];
    if (small) {
      style.push(this.styles.small);
    }

    return (
      <View style={this.styles.wrapper}>
        <TouchableNativeFeedback
          onPress={this.handleButtonPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={style} pointerEvents='box-only'>
            {this.renderValue()}
            {this.renderText()}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default PadButton;
