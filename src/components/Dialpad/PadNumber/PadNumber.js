/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import type { Selection, InputState } from '../../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';
import getStyles from './styles';
import { replaceText, handleBackspace } from '../inputState';
import backspace from '../../../assets/icons/backspace.png';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe/TouchableNativeFeedbackSafe';

type Props = {
  inputState: InputState,
  isLandscape: boolean,
  isSmallWidth: boolean,
  onChange: (inputState: InputState) => mixed
};

type State = {
  isFocused: boolean
};

class PadNumber extends PureComponent<Props, State> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.PadNumber);

    this.state = {
      isFocused: false
    };
  }

  handleChange = (event: *) => {
    this.props.onChange(replaceText(event.nativeEvent.text));
  };

  handleTextChange = (value: string) => {
    this.props.onChange(replaceText(value));
  };

  handleBackspace = () => {
    this.props.onChange(handleBackspace(this.props.inputState));
  };

  handleSelectionChange = (event: *) => {
    const { inputState: { value } } = this.props;
    const { nativeEvent: { selection } } = event;
    this.props.onChange({ value, selection })
  };

  render() {
    const { inputState, isLandscape, isSmallWidth } = this.props;
    const styles = [this.styles.container];
    const numberStyles = [this.styles.number];
    const backspaceStyles = [this.styles.backspace];
    const backspaceIconStyles = [this.styles.backspaceIcon];
    if (isLandscape) {
      styles.push(this.styles.small);
      numberStyles.push(this.styles.numberSmall);
      backspaceStyles.push(this.styles.backspaceSmall);
      backspaceIconStyles.push(this.styles.backspaceIconSmall);
    }

    if (isSmallWidth) {
      styles.push(this.styles.containerCompact);
    }

    return (
      <View style={styles}>
        <TextInput
          keyboardHidden
          disableFullscreenUI
          autoCorrect={false}
          style={numberStyles}
          value={inputState.value}
          selection={Platform.OS === 'android' ? null : inputState.selection}
          underlineColorAndroid="transparent"
          dataDetectorTypes="phoneNumber"
          onChange={this.handleChange}
          onTextChange={this.handleTextChange}
          onSelectionChange={this.handleSelectionChange}
        />
        <View style={backspaceStyles}>
          <TouchableNativeFeedback
            onPress={this.handleBackspace}
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          >
            <Image source={backspace} style={backspaceIconStyles} />
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default PadNumber;
