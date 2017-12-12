/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type {
  CustomFormProps as Props,
  CustomFormProperty,
  CustomFormValue
} from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Block from '../Block/Block';
import BlockText from '../BlockText/BlockText';
import CustomFormString from './CustomFormString/CustomFormString';
import CustomFormBoolean from './CustomFormBoolean/CustomFormBoolean';
import getStyles from './styles';
import { Color } from '../../styles';

class CustomForm extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.CustomForm);
  }

  getProperySchema = (key: string): CustomFormProperty =>
    this.props.schema.properties[key];
  getProperyValue = (key: string): CustomFormValue => this.props.value[key];

  handleChange = (key: string, value: string | boolean): void => {
    this.props.onChange({
      ...this.props.value,
      [key]: value
    });
  };

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
            <CustomFormBoolean
              id={propery}
              key={propery}
              title={title}
              onChange={this.handleChange}
              value={Boolean(value)}
            />
          );
          break;
        case 'integer':
          children = (
            <CustomFormString
              id={propery}
              key={propery}
              title={title}
              onChange={this.handleChange}
              value={String(value)}
              keyboardType="numeric"
            />
          );
          break;
        case 'string':
          children = (
            <CustomFormString
              id={propery}
              key={propery}
              title={title}
              onChange={this.handleChange}
              value={String(value)}
            />
          );
          break;
        default:
          children = <Text key={propery}>{`Unsupported type ${type}`}</Text>;
      }

      properties.push(children);
    }

    return properties;
  }

  render() {
    return (
      <Block style={this.styles.container}>{this.renderProperties()}</Block>
    );
  }
}

export default CustomForm;
