/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import getStyles from './styles';
import { Color } from '../../../styles';
import Icon from '../../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe/TouchableNativeFeedbackSafe';
import { handleBackspace } from '../inputState';

type Props = {};

type State = {};

class PadFooter extends PureComponent<Props, State> {
  styles: Object;

  static defaultProps = {};

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context & ProviderContext) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Pad);
  }
  handleBackspace = () => {
    this.props.onChange(handleBackspace(this.props.inputState));
  };

  renderBackspace() {
    if (!this.props.inputState.value.length) {
      return null;
    }

    return (
      <View style={this.styles.footerBackspace}>
        <TouchableNativeFeedback
          onPress={this.handleBackspace}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <Icon glyph="backspace" style={this.styles.footerBackspaceIcon} />
        </TouchableNativeFeedback>
      </View>
    );
  }

  render() {
    return (
      <View style={this.styles.footerContainer}>
        <TouchableNativeFeedback
          onPress={this.props.onCallPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          <View style={this.styles.footerCallButton}>
            <Icon glyph="call" style={this.styles.footerCallButtonIcon} />
          </View>
        </TouchableNativeFeedback>
        {this.renderBackspace()}
      </View>
    );
  }
}

export default PadFooter;
