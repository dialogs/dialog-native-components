/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import type { Theme } from '../../../types';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text, Switch } from 'react-native';
import Icon from '../../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './stylesIOS';
import { Color } from '../../../styles';

type Props = {
  id: string,
  title: string,
  value: boolean,
  style?: any,
  borderless: boolean,
  onChange: (id: string, value: boolean) => mixed
};

class CustomFormBoolean extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    borderless: false
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.CustomFormBoolean);
  }

  handleSwitcherChange = (value: boolean): void => {
    this.props.onChange(this.props.id, value);
  };

  render() {
    const componentStyles = [this.styles.container];
    if (!this.props.borderless) {
      componentStyles.push(this.styles.withBorder);
    }
    const { formatText } = this.context.l10n;

    return (
      <View style={componentStyles}>
        <Text style={this.styles.text} numberOfLines={1}>
          {formatText(this.props.title).toUpperCase()}
        </Text>
        <Switch
          style={this.styles.switch}
          onValueChange={this.handleSwitcherChange}
          value={this.props.value}
        />
        {this.props.borderless ? null : <View style={this.styles.border} />}
      </View>
    );
  }
}

export default CustomFormBoolean;
