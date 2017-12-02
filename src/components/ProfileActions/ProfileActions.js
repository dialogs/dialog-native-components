/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import getStyles from './styles';
import Block from '../Block/Block';
import BlockAction from '../BlockAction/BlockAction';
import BlockActionSwitcher from '../BlockAction/BlockActionSwitcher';
import { Color } from '../../styles';

import Icon from '../Icon/Icon';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';

type Props = {
  isNotificationsEnabled: boolean,
  isContact: boolean,
  isBlocked: boolean,
  isFavourite: boolean,
  onNotificationsChange: () => void,
  onFavouriteToggle: () => void,
  onUserBlock: () => void
};

class ProfileActions extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileActions);
  }

  render() {
    return (
      <Block>
        <BlockActionSwitcher
          onChange={this.props.onNotificationsChange}
          icon="notification"
          iconColor={Color.primary}
          text="Notifications"
          value={this.props.isNotificationsEnabled}
        />
        <BlockAction
          onPress={() => {}}
          icon="list"
          iconColor={Color.primary}
          text="Shared media"
        >
          <Text style={this.styles.count}>42</Text>
        </BlockAction>
        <BlockAction
          onPress={this.props.onFavouriteToggle}
          icon={this.props.isFavourite ? 'star' : 'star_outline'}
          iconColor={Color.warning}
          text={
            this.props.isFavourite
              ? 'Remove from favourites'
              : 'Add to favourites'
          }
          textColor={Color.warning}
        />
        <BlockAction
          onPress={this.props.onUserBlock}
          icon="block"
          iconColor={Color.danger}
          text="Block user"
          textColor={Color.danger}
        />
      </Block>
    );
  }
}

export default ProfileActions;
