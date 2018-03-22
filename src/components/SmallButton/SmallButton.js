/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone, Email } from '@dlghq/dialog-types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from '../Icon/Icon';
import Block from '../Block/Block';
import BlockText from '../BlockText/BlockText';
import getStyles from './styles';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import { Color } from '../../styles';
import ColorJS from 'color';

type Props = {
  title: string,
  textColor: string,
  onPress: () => mixed
};

class UserProfileAbout extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    textColor: Color.gray
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  render() {
    const { formatText } = this.context.l10n;

    return (
      <View style={this.styles.button}>
        <TouchableNativeFeedback
          onPress={this.props.onPress}
          background={TouchableNativeFeedback.Ripple(
            ColorJS(this.props.textColor).alpha(0.2)
          )}
          delayPressIn={0}
        >
          <View style={this.styles.wrapper}>
            <Text style={(this.styles.text, { color: this.props.textColor })}>
              {formatText(this.props.title).toUpperCase()}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default UserProfileAbout;
