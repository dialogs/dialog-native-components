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
import getStyles from './styles.ios';
import { replaceText } from '../inputState';

type Props = {
  inputState: InputState,
  isLandscape: boolean,
  isSmallWidth: boolean,
  isContactsEnabled: boolean,
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

  handleSelectionChange = (event: *) => {
    const { inputState: { value } } = this.props;
    const { nativeEvent: { selection } } = event;
    this.props.onChange({ value, selection });
  };

  render() {
    const {
      inputState,
      isLandscape,
      isSmallWidth,
      isContactsEnabled
    } = this.props;
    const styles = [this.styles.container];
    const numberStyles = [this.styles.number];
    if (isLandscape) {
      styles.push(this.styles.small);
      numberStyles.push(this.styles.numberSmall);
    }

    if (isSmallWidth) {
      styles.push(this.styles.containerCompact);
    }

    if (!isContactsEnabled && !isLandscape) {
      styles.push(this.styles.containerWidthPadding);
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
      </View>
    );
  }
}

export default PadNumber;
