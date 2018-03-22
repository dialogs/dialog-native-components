/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { JSONValue, JSONSchema } from '../../utils/JSONSchema';
import { LocalizationContextType } from '@dlghq/react-l10n';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, Platform } from 'react-native';
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
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileCustomInfo);
  }

  renderProperties() {
    const { value, schema } = this.props;

    return Object.keys(schema.properties).map((propName, index, array) => {
      const propValue = value && value[propName] ? value[propName] : null;
      const { type, title } = schema.properties[propName];

      // Do not render property if no value presented
      if (!propValue || typeof propValue === 'undefined' || propValue === '') {
        return null;
      }

      const borderless = array.length - 1 === index;

      switch (type) {
        case 'boolean':
          const { formatText } = this.context.l10n;
          return (
            <BlockText key={propName} title={title} borderless={borderless}>
              <Text style={this.styles.boolean}>
                {formatText(propValue ? 'Yes' : 'No')}
              </Text>
            </BlockText>
          );

        case 'number':
        case 'integer':
          return (
            <BlockText key={propName} title={title} borderless={borderless}>
              <Text style={this.styles.integer}>{propValue}</Text>
            </BlockText>
          );

        default:
          return (
            <BlockText key={propName} title={title} borderless={borderless}>
              <Text style={this.styles.string}>{propValue}</Text>
            </BlockText>
          );
      }
    });
  }

  render() {
    const styles = Platform.select({
      ios: null,
      android: this.styles.container
    });

    return <Block style={styles}>{this.renderProperties()}</Block>;
  }
}

export default ProfileCustomInfo;
