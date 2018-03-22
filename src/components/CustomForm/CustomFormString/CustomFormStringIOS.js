/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import getStyles from './stylesIOS';
import { Color } from '../../../styles';

type Props = {
  id: string,
  title: string,
  value: string,
  keyboardType: 'default' | 'numeric',
  borderless: boolean,
  onChange: (id: string, value: string) => mixed
};

class CustomFormString extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    keyboardType: 'default',
    borderless: false
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.BlockText);
  }

  handleChange = (value: string) => {
    this.props.onChange(this.props.id, value);
  };

  renderTitle() {
    if (!this.props.title) {
      return null;
    }

    const { formatText } = this.context.l10n;

    return (
      <Text style={this.styles.title}>
        {formatText(this.props.title).toUpperCase()}
      </Text>
    );
  }

  renderTextInput() {
    return (
      <TextInput
        style={this.styles.input}
        onChangeText={this.handleChange}
        value={this.props.value}
        returnKeyType="done"
        // placeholder={this.props.title}
        keyboardType={this.props.keyboardType}
      />
    );
  }

  render() {
    const componentStyles = [this.styles.container];
    if (!this.props.borderless) {
      componentStyles.push(this.styles.withBorder);
    }

    return (
      <View style={componentStyles}>
        {this.renderTitle()}
        {this.renderTextInput()}
      </View>
    );
  }
}

export default CustomFormString;
