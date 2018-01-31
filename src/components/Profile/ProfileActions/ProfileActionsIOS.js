/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ProfileActions as Props } from '../../../types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import Block from '../../Block/Block';
import BlockActionSwitcher from '../../BlockActionSwitcher/BlockActionSwitcher';
import BlockAction from '../../BlockAction/BlockAction';
import getStyles from './stylesIOS';
import { Color } from '../../../styles';

class ProfileActions extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Profile);
  }

  renderBlockButton() {
    const { formatText } = this.context.l10n;

    return (
      <TouchableNativeFeedback onPress={this.props.onUserBlock}>
        <View style={this.styles.blockButton}>
          <Text
            style={[
              this.styles.blockButtonText,
              { color: this.context.theme.color.danger || Color.danger }
            ]}
          >
            {formatText('Profile.block')}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    const { isNotificationsEnabled, isFavourite } = this.props;

    return (
      <View>
        <Block>
          <BlockActionSwitcher
            onChange={this.props.onNotificationsChange}
            icon="notification"
            iconColor={this.context.theme.color.danger || Color.danger}
            text="Profile.notifications"
            value={isNotificationsEnabled}
          />
          <BlockAction
            onPress={() => {}}
            icon="list"
            iconColor={this.context.theme.color.info || Color.info}
            text="Profile.media"
            withArrow
          >
            <Text style={this.styles.count}>42</Text>
          </BlockAction>
          <BlockAction
            onPress={this.props.onFavouriteToggle}
            icon={isFavourite ? 'star' : 'star_outline'}
            iconColor={this.context.theme.color.warning || Color.warning}
            borderless
            text={
              isFavourite
                ? 'Profile.favourite_enable'
                : 'Profile.favourite_disable'
            }
            textColor={this.context.theme.color.warning || Color.warning}
          />
        </Block>
        <Block>{this.renderBlockButton()}</Block>
      </View>
    );
  }
}

export default ProfileActions;
