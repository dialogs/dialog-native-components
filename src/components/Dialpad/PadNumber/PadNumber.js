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
  ScrollView
} from 'react-native';
import getStyles from './styles';
import backspace from '../../../assets/icons/backspace.png';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe/TouchableNativeFeedbackSafe';

type Props = {
  value: string,
  small: boolean,
  selection: Selection,
  onSelectionChange: (selection: Selection) => mixed,
  onBackspacePress: () => mixed
};

class PadNumber extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.PadNumber);
  }

  handleSelectionChange = (event: *) => {
    this.props.onSelectionChange(event.nativeEvent.selection);
  };

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
        <TextInput
          style={numberStyles}
          value={this.props.value}
          autoFocus
          selection={this.props.selection}
          underlineColorAndroid="transparent"
          autoCorrect={false}
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
