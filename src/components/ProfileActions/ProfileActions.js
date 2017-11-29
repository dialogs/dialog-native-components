/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import Icon from '../Icon/Icon';
import getStyles from './styles';
import ProfileBlock from '../Profile/ProfileBlock';
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

class ProfileActions extends PureComponent {
  props: Props;
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

  handleNotificationChange = () => {
    this.props.onNotificationsChange(!this.props.isNotificationsEnabled);
  };

  render() {
    return (
      <ProfileBlock>
        <View>
          <TouchableNativeFeedback
            onPress={this.handleNotificationChange}
            delayPressIn={0}
          >
            <View style={this.styles.block} pointerEvents="box-only">
              <Icon glyph="notification" size={26} style={this.styles.icon} />
              <Text style={this.styles.text} numberOfLines={1}>
                Notifications
              </Text>
            </View>
          </TouchableNativeFeedback>
          <Switch
            style={this.styles.switch}
            onValueChange={this.props.onNotificationsChange}
            value={this.props.isNotificationsEnabled}
          />
        </View>
        <TouchableNativeFeedback
          onPress={this.props.onUserBlock}
          delayPressIn={0}
        >
          <View style={this.styles.block} pointerEvents="box-only">
            <Icon glyph="list" size={26} style={this.styles.icon} />
            <Text style={this.styles.text} numberOfLines={1}>
              Shared media
            </Text>
            <Text style={this.styles.count}>12</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={this.props.onFavouriteToggle}
          delayPressIn={0}
        >
          <View style={this.styles.block} pointerEvents="box-only">
            <Icon
              glyph={this.props.isFavourite ? 'star' : 'star_outline'}
              size={26}
              style={this.styles.icon}
            />
            <Text style={this.styles.favText} numberOfLines={1}>
              {this.props.isFavourite
                ? 'Remove from favourites'
                : 'Add to favourites'}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={this.props.onUserBlock}
          delayPressIn={0}
        >
          <View style={this.styles.block} pointerEvents="box-only">
            <Icon glyph="block" size={26} style={this.styles.icon} />
            <Text style={this.styles.blockText} numberOfLines={1}>
              Block user
            </Text>
          </View>
        </TouchableNativeFeedback>
      </ProfileBlock>
    );
  }
}

export default ProfileActions;
