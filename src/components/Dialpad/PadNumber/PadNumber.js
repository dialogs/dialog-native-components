/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import type { Selection } from '../../../types';
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
import backspace from '../../../assets/icons/backspace.png';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe/TouchableNativeFeedbackSafe';

type Props = {
  value: string,
  small: boolean,
  selection?: ?Selection,
  isSmallWidth: boolean,
  onSelectionChange: (selection: Selection) => mixed,
  onBackspacePress: () => mixed
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

  handleSelectionChange = (event: *) => {
    this.props.onSelectionChange(event.nativeEvent.selection);
  };

  render() {
    const { small, isSmallWidth } = this.props;
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

    if (isSmallWidth) {
      styles.push(this.styles.containerCompact);
    }

    return (
      <View style={styles}>
        <TextInput
          style={numberStyles}
          value={this.props.value}
          selection={Platform.OS === 'android' ? null : this.props.selection}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          disableFullscreenUI
          dataDetectorTypes="phoneNumber"
          onSelectionChange={this.handleSelectionChange}
        />
        <View style={backspaceStyles}>
          <TouchableNativeFeedback
            onPress={this.props.onBackspacePress}
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
