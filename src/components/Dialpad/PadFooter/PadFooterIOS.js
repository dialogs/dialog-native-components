/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import type { Selection, InputState } from '../../../types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PadCallButton from '../PadCallButton/PadCallButton';
import Icon from '../../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe/TouchableNativeFeedbackSafe';
import getStyles from './styles';
import { handleBackspace } from '../inputState';

type Props = {
  onCallPress: () => mixed,
  isSmallWidth: boolean,
  horizontal: boolean,
  onChange: (inputState: InputState) => mixed,
  inputState: InputState
};

class PadFooter extends PureComponent<Props> {
  context: Context;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.PadFooter);
  }

  handleBackspace = () => {
    this.props.onChange(handleBackspace(this.props.inputState));
  };

  renderBackspace() {
    if (!this.props.inputState.value.length) {
      return null;
    }

    return (
      <View style={this.styles.backspace}>
        <TouchableNativeFeedback
          onPress={this.handleBackspace}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <Icon glyph="backspace" style={this.styles.backspaceIcon} />
        </TouchableNativeFeedback>
      </View>
    );
  }

  render() {
    const { horizontal, isSmallWidth } = this.props;
    const style = [this.styles.container];
    if (horizontal) {
      style.push(this.styles.horizontal);
    }

    return (
      <View style={isSmallWidth ? this.styles.smallWidth : style}>
        <PadCallButton
          onCallPress={this.props.onCallPress}
          small={horizontal}
          vertical={isSmallWidth}
        />
        {this.renderBackspace()}
      </View>
    );
  }
}

export default PadFooter;
