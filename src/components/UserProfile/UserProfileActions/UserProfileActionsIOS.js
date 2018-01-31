/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Block from '../../Block/Block';
import BlockAction from '../../BlockAction/BlockAction';
import getStyles from './stylesIOS';
import { Color } from '../../../styles';

type Props = {};

class UserProfileActions extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
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
            withArrow
            iconColor={this.context.theme.color.danger || Color.danger}
            text="User.notifications"
          />
          <BlockAction
            onPress={() => {}}
            icon="lock"
            withArrow
            iconColor={this.context.theme.color.grayLight || Color.grayLight}
            text="User.privacy"
          />
          <BlockAction
            onPress={() => {}}
            icon="logo"
            withArrow
            borderless
            iconColor={this.context.theme.color.primary || Color.primary}
            text="User.advanced_settings"
          />
        </Block>
        <Block>
          <BlockAction
            onPress={() => {}}
            withArrow
            icon="question"
            iconColor={this.context.theme.color.success || Color.success}
            text="User.ask_a_question"
          />
          <BlockAction
            onPress={() => {}}
            withArrow
            icon="bug"
            borderless
            iconColor={this.context.theme.color.warning || Color.warning}
            text="User.feedback"
          />
        </Block>
      </View>
    );
  }
}

export default UserProfileActions;
