/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './styles.ios';

type Props = {
  value: string,
  text: string,
  small: boolean,
  compact: boolean,
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
    console.log('PadButton ios');
    const { small, compact } = this.props;
    const containerStyle = [this.styles.container];
    const textStyle = [this.styles.text];
    const valueStyle = [this.styles.value];
    const wrapperStyle = [this.styles.wrapper];
    if (small) {
      containerStyle.push(this.styles.small);
      textStyle.push(this.styles.textSmall);
      valueStyle.push(this.styles.valueSmall);
    }

    if (compact) {
      wrapperStyle.push(this.styles.wrapperCompact);
      textStyle.push(this.styles.textCompact);
      valueStyle.push(this.styles.valueCompact);
    }

    return (
      <View style={wrapperStyle}>
        <TouchableNativeFeedback
          onPress={this.handleButtonPress}
          onLongPress={this.handleButtonLongPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={containerStyle} pointerEvents="box-only">
            <Text style={valueStyle}>{this.props.value}</Text>
            <Text style={textStyle} numberOfLines={1}>
              {this.props.text.toUpperCase()}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default PadButton;
