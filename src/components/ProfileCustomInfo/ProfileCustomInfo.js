/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type {
  CustomForm as Props,
  CustomFormProperty,
  CustomFormValue
} from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Block from '../Block/Block';
import BlockText from '../BlockText/BlockText';
import getStyles from './styles';
import { Color } from '../../styles';

class ProfileCustomInfo extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileCustomInfo);
  }

  getProperySchema = (key: string): CustomFormProperty =>
    this.props.schema.properties[key];
  getProperyValue = (key: string): CustomFormValue => this.props.value[key];

  renderProperties() {
    const { schema } = this.props;
    const properties = [];

    for (var propery in schema.properties) {
      const value = this.getProperyValue(propery);
      const { title, type } = this.getProperySchema(propery);
      let children = null;

      switch (type) {
        case 'boolean':
          children = (
            <Text style={this.styles.boolean}>{value ? 'Yes' : 'No'}</Text>
          );
          break;
        case 'integer':
          children = <Text style={this.styles.integer}>{value}</Text>;
          break;
        default:
          children = <Text style={this.styles.string}>{value}</Text>;
      }

      properties.push(
        <BlockText key={propery} title={title}>
          {children}
        </BlockText>
      );
    }

    return properties;
  }

  render() {
    return (
      <Block style={this.styles.container}>{this.renderProperties()}</Block>
    );
  }
}

export default ProfileCustomInfo;
