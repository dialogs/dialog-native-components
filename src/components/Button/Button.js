/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import { LocalizationContextType } from '@dlghq/react-l10n';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import getStyles from './styles';

type Props = {
  title: string,
  icon?: ?string,
  onPress: () => mixed
};

class Button extends PureComponent<Props> {
  styles: Object;

  static defailtProps = {
    wide: false
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Schedule);
  }

  render() {
    const { formatText } = this.context.l10n;

    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
        <View style={this.styles.container}>
          <Text style={this.styles.text}>
            {formatText(this.props.title).toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;
