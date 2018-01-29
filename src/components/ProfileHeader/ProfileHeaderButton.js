/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon/Icon';
import getStyles from './styles';

type Props = {
  icon: string,
  title: string,
  style?: ?*,
  onPress: () => mixed
};

class ProfileHeaderButton extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileHeader);
  }

  renderIcon() {
    if (!this.props.icon) {
      return null;
    }

    return (
      <Icon glyph={this.props.icon} size={26} style={this.styles.buttonIcon} />
    );
  }

  render() {
    const { formatText } = this.context.l10n;

    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
        <View
          style={[this.styles.button, this.props.style]}
          pointerEvents="box-only"
        >
          <View style={this.styles.buttonWrapper}>
            {this.renderIcon()}
            <Text style={this.styles.buttonText} numberOfLines={1}>
              {formatText(this.props.title).toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProfileHeaderButton;
