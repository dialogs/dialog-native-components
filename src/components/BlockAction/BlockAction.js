/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { LocalizationContextType } from '@dlghq/react-l10n';
import { View, Text } from 'react-native';
import Icon from '../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  text?: string,
  icon?: string,
  iconColor?: string,
  textColor?: string,
  style?: ?*,
  children?: ?*,
  onPress: () => mixed
};

class BlockAction extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    iconColor: Color.gray,
    textColor: Color.black
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.BlockAction);
  }

  renderIcon() {
    if (!this.props.icon) {
      return <View style={this.styles.spacer} />;
    }

    return (
      <Icon
        glyph={this.props.icon}
        size={26}
        style={[this.styles.icon, { tintColor: this.props.iconColor }]}
      />
    );
  }

  renderText() {
    const { formatText } = this.context.l10n;

    return (
      <Text
        style={[this.styles.text, { color: this.props.textColor }]}
        numberOfLines={1}
      >
        {formatText(this.props.text)}
      </Text>
    );
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View
          style={[this.styles.container, this.props.style]}
          pointerEvents="box-only"
        >
          {this.renderIcon()}
          {this.renderText()}
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default BlockAction;
