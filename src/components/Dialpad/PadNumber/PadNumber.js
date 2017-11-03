/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";
import getStyles from './styles';
import backspace from '../../../assets/icons/backspace.png';
import TouchableNativeFeedback from "@expo/react-native-touchable-native-feedback-safe/TouchableNativeFeedbackSafe";

type Props = {
  value: string,
  small: boolean,
  onBackspacePress: () => mixed
};

class PadNumber extends PureComponent {
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

    this.styles = getStyles(context.theme, context.style.PadNumber);
  }

  render() {
    const { small } = this.props;
    const styles = [this.styles.container];
    const numberStyles = [this.styles.number];
    const backspaceStyles = [this.styles.backspace];
    const backspaceIconStyles = [this.styles.backspaceIcon];
    if (small) {
      styles.push(this.styles.small);
      numberStyles.push(this.styles.numberSmall);
      backspaceStyles.push(this.styles.backspaceSmall);
      backspaceIconStyles.push(this.styles.backspaceIconSmall);
    }

    return (
      <View style={styles}>
        <Text style={numberStyles}>{this.props.value}</Text>
          <View style={backspaceStyles}>
            <TouchableNativeFeedback
              onPress={this.props.onBackspacePress}
              background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
            >
              <Image source={backspace} style={backspaceIconStyles}/>
            </TouchableNativeFeedback>
          </View>
      </View>
    );
  }
}

export default PadNumber;
