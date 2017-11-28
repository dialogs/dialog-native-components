/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import getStyles from './styles';
import ProfileBlock from '../Profile/ProfileBlock';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import notification from '../../assets/icons/notification.png';
import star from '../../assets/icons/star.png';
import block from '../../assets/icons/block.png';

type Props = {
  isNotificationsEnabled: boolean,
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
      <View>
        <ProfileBlock>
          <View>
            <TouchableNativeFeedback
              onPress={this.handleNotificationChange}
              delayPressIn={0}
            >
              <View style={this.styles.block} pointerEvents="box-only">
                <Image source={notification} style={this.styles.icon} />
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
            onPress={this.props.onFavouriteToggle}
            delayPressIn={0}
          >
            <View style={this.styles.block} pointerEvents="box-only">
              <Image source={star} style={this.styles.icon} />
              <Text style={this.styles.favText} numberOfLines={1}>
                Add to favourites
              </Text>
            </View>
          </TouchableNativeFeedback>
        </ProfileBlock>
        <ProfileBlock>
          <TouchableNativeFeedback
            onPress={this.props.onUserBlock}
            delayPressIn={0}
          >
            <View style={this.styles.block} pointerEvents="box-only">
              <Image source={block} style={this.styles.icon} />
              <Text style={this.styles.blockText} numberOfLines={1}>
                Block user
              </Text>
            </View>
          </TouchableNativeFeedback>
        </ProfileBlock>
      </View>
    );
  }
}

export default ProfileActions;
