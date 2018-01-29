/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ProfileActions as Props } from '../../types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import Block from '../Block/Block';
import BlockActionSwitcher from '../BlockAction/BlockActionSwitcher';
import BlockAction from '../BlockAction/BlockAction';
import getStyles from './styles';
import { Color } from '../../styles';

class ProfileActions extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Profile);
  }

  render() {
    const { isNotificationsEnabled, isFavourite } = this.props;

    return (
      <Block>
        <BlockActionSwitcher
          onChange={this.props.onNotificationsChange}
          icon="notification"
          iconColor={this.context.theme.color.primary || Color.primary}
          text="Profile.notifications"
          value={isNotificationsEnabled}
        />
        <BlockAction
          onPress={() => {}}
          icon="list"
          iconColor={this.context.theme.color.primary || Color.primary}
          text="Profile.media"
        >
          <Text style={this.styles.count}>42</Text>
        </BlockAction>
        <BlockAction
          onPress={this.props.onFavouriteToggle}
          icon={isFavourite ? 'star' : 'star_outline'}
          iconColor={this.context.theme.color.warning || Color.warning}
          text={
            isFavourite
              ? 'Profile.favourite_enable'
              : 'Profile.favourite_disable'
          }
          textColor={this.context.theme.color.warning || Color.warning}
        />
        <BlockAction
          onPress={this.props.onUserBlock}
          icon="block"
          iconColor={this.context.theme.color.danger || Color.danger}
          text="Profile.block"
          textColor={this.context.theme.color.danger || Color.danger}
        />
      </Block>
    );
  }
}

export default ProfileActions;
