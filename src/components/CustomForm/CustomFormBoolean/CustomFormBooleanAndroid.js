/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import type { Theme } from '../../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, Switch } from 'react-native';
import Icon from '../../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './stylesAndroid';
import { Color } from '../../../styles';

type Props = {
  id: string,
  title: string,
  value: boolean,
  style?: any,
  onChange: (id: string, value: boolean) => mixed
};

class CustomFormBoolean extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    theme: 'default',
    iconTheme: 'default'
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.CustomFormBoolean);
  }

  handlePress = (): void => {
    this.props.onChange(this.props.id, !this.props.value);
  };

  handleSwitcherChange = (value: boolean): void => {
    this.props.onChange(this.props.id, value);
  };

  render() {
    return (
      <View>
        <TouchableNativeFeedback onPress={this.handlePress}>
          <View style={this.styles.container} pointerEvents="box-only">
            <Text style={this.styles.text} numberOfLines={1}>
              {this.props.title}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Switch
          style={this.styles.switch}
          onValueChange={this.handleSwitcherChange}
          value={this.props.value}
        />
      </View>
    );
  }
}

export default CustomFormBoolean;
