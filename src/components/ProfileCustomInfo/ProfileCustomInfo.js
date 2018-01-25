/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { JSONValue, JSONSchema } from '../../utils/JSONSchema';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Block from '../Block/Block';
import BlockText from '../BlockText/BlockText';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  value: JSONValue,
  schema: JSONSchema
};

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

  renderProperties() {
    const { value, schema } = this.props;

    return Object.keys(schema.properties).map((propName) => {
      const propValue = value ? value[propName] : null;
      const { type, title } = schema.properties[propName];

      switch (type) {
        case 'boolean':
          return (
            <BlockText key={propName} title={title}>
              <Text style={this.styles.boolean}>
                {value ? 'Yes' : 'No'}
              </Text>
            </BlockText>
          );

        case 'integer':
          return (
            <BlockText key={propName} title={title}>
              <Text style={this.styles.integer}>{value}</Text>
            </BlockText>
          );

        default:
          return (
            <BlockText key={propName} title={title}>
              <Text style={this.styles.string}>{value}</Text>
            </BlockText>
          );
      }
    });
  }

  render() {
    return (
      <Block style={this.styles.container}>
        {this.renderProperties()}
      </Block>
    );
  }
}

export default ProfileCustomInfo;
