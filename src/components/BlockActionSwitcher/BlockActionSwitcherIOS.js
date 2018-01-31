/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { Theme } from '../../types';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text, Switch } from 'react-native';
import Icon from '../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './stylesIOS';
import { Color } from '../../styles';

type Props = {
  text?: string,
  icon?: string,
  value: boolean,
  iconColor?: string,
  textColor?: string,
  style?: ?*,
  borderless: boolean,

  onChange: (value: boolean) => mixed
};

class BlockActionSwitcher extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    iconColor: Color.gray,
    textColor: Color.black,
    borderless: false
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
      return <View styles={this.styles.spacer} />;
    }
    return (
      <View
        style={[
          this.styles.iconWrapper,
          { backgroundColor: this.props.iconColor }
        ]}
      >
        <Icon glyph={this.props.icon} size={24} style={this.styles.icon} />
      </View>
    );
  }

  renderText() {
    const { formatText } = this.context.l10n;

    return (
      <Text
        style={[
          this.styles.text,
          { color: this.props.textColor || Color.black }
        ]}
        numberOfLines={1}
      >
        {formatText(this.props.text)}
      </Text>
    );
  }

  render() {
    return (
      <View>
        <View style={this.styles.container}>
          {this.renderIcon()}
          <View style={this.styles.content}>{this.renderText()}</View>
          <Switch
            style={this.styles.switch}
            onValueChange={this.props.onChange}
            value={this.props.value}
          />
        </View>
        {this.props.borderless ? null : <View style={this.styles.border} />}
      </View>
    );
  }
}

export default BlockActionSwitcher;
