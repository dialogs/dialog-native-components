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

  handleButtonLongPress = () => {
    if (this.props.value === '0') {
      this.props.onPress(this.props.text);
    }
  };

  render() {
    const { small } = this.props;
    const containerStyle = [this.styles.container];
    const textStyle = [this.styles.text];
    const valueStyle = [this.styles.value];
    if (small) {
      containerStyle.push(this.styles.small);
      textStyle.push(this.styles.textSmall);
      valueStyle.push(this.styles.valueSmall);
    }

    return (
      <View style={this.styles.wrapper}>
        <TouchableNativeFeedback
          onPress={this.handleButtonPress}
          onLongPress={this.handleButtonLongPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={containerStyle} pointerEvents='box-only'>
            <Text style={valueStyle}>{this.props.value}</Text>
            <Text style={textStyle} numberOfLines={1}>{this.props.text.toUpperCase()}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default PadButton;
