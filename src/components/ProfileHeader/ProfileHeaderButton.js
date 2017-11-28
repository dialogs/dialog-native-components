/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import Icon from '../Icon/Icon';
import getStyles from './styles';

type Props = {
  avatar?: string,
  title: string,
  id: number,
  style?: string,
  renderButtons?: () => mixed
};

class ProfileHeaderButton extends PureComponent<Props> {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileHeader);
  }

  renderIcon() {
    return null;
  }

  render() {
    console.log('ProfileButton', this.props);

    return (
      <TouchableNativeFeedback onPress={this.props.onPress} delayPressIn={0}>
        <View
          style={[this.styles.button, this.props.style]}
          pointerEvents="box-only"
        >
          <View style={this.styles.buttonTextWrapper}>
            {this.renderIcon()}
            <Text style={this.styles.buttonText}>
              {this.props.title.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default ProfileHeaderButton;
