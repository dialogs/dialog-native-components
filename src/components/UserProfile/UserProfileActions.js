/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Block from '../Block/Block';
import BlockAction from '../BlockAction/BlockAction';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {};

class UserProfileActions extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  render() {
    return (
      <View>
        <Block>
          <BlockAction
            onPress={() => {}}
            icon="notification"
            iconColor={this.context.theme.color.primary || Color.primary}
            text="Notifications and sounds"
          />
          <BlockAction
            onPress={() => {}}
            icon="security"
            iconColor={this.context.theme.color.primary || Color.primary}
            text="Privacy and security"
          />
          <BlockAction
            onPress={() => {}}
            icon="logo"
            iconColor={this.context.theme.color.primary || Color.primary}
            text="Advanced settings"
          />
        </Block>
        <Block>
          <BlockAction
            onPress={() => {}}
            icon="question"
            iconColor={this.context.theme.color.primary || Color.primary}
            text="Ask question in chat"
          />
          <BlockAction
            onPress={() => {}}
            icon="bug"
            iconColor={this.context.theme.color.primary || Color.primary}
            text="Submit feedback"
          />
        </Block>
      </View>
    );
  }
}

export default UserProfileActions;
