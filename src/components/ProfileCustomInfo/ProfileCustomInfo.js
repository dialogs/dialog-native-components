/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { User } from '@dlghq/dialog-types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import ProfileBlock from '../Profile/ProfileBlock';
import ProfileCustomInfoItem from './ProfileCustomInfoItem';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {};

class ProfileCustomInfo extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileCustomInfo);
  }

  getProperySchema = (key: string) => this.props.schema.properties[key];
  getProperyValue = (key: string) => this.props.value[key];

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
            <Text style={this.styles.booleanValue}>{value ? 'Yes' : 'No'}</Text>
          );
          break;
        case 'integer':
          children = <Text style={this.styles.integerValue}>{value}</Text>;
          break;
        default:
          children = <Text style={this.styles.stringValue}>{value}</Text>;
      }

      properties.push(
        <ProfileCustomInfoItem key={propery} title={title}>
          {children}
        </ProfileCustomInfoItem>
      );
    }

    return properties;
  }

  render() {
    console.log('ProfileCustomInfo', this.props);
    return (
      <ProfileBlock style={this.styles.container}>
        {this.renderProperties()}
      </ProfileBlock>
    );
  }
}

export default ProfileCustomInfo;
