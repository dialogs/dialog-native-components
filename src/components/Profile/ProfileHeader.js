/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import type { UserOnline } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import getAvatarPlaceholder from '../../utils/getAvatarPlaceholder';
import ProfileHeaderWrapper from '../ProfileHeader/ProfileHeader';
import ProfileHeaderButton from '../ProfileHeader/ProfileHeaderButton';
import ProfileHeaderTitle from '../ProfileHeader/ProfileHeaderTitle';
import ProfileHeaderOnline from '../ProfileHeader/ProfileHeaderOnline';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  avatar: ?string,
  title: string,
  id: number,
  online: UserOnline,
  onMessagePress: () => mixed,
  onCallPress: () => mixed
};

class ProfileHeader extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Profile);
  }

  renderAvatar() {
    const { avatar, title, id } = this.props;
    const placeholder = getAvatarPlaceholder(id);

    return (
      <Avatar
        style={this.styles.avatar}
        image={avatar}
        placeholder={placeholder}
        title={title}
        size={120}
      />
    );
  }

  renderButtons() {
    // Try new buttons design
    //
    // return (
    //   <View style={this.styles.buttonsNew}>
    //     <View style={this.styles.button}>
    //       <Icon glyph="logo" size={28} style={this.styles.buttonIcon} />
    //       <Text style={this.styles.buttonText} numberOfLines={1}>Написать</Text>
    //     </View>
    //     <View style={this.styles.divider} />
    //     <View style={this.styles.button}>
    //       <Icon glyph="call" size={28} style={this.styles.buttonIcon} />
    //       <Text style={this.styles.buttonText} numberOfLines={1}>Позвонить</Text>
    //     </View>
    //   </View>
    // );
    const glyphs = Platform.select({
      ios: {
        call: 'call_outline',
        message: 'logo_outline'
      },
      android: {
        call: 'call',
        message: 'logo'
      }
    });

    return (
      <View style={this.styles.buttons}>
        <View style={this.styles.buttonWrapper}>
          <ProfileHeaderButton
            onPress={this.props.onMessagePress}
            title="Profile.button_message"
            icon={glyphs.message}
          />
        </View>
        <View style={this.styles.buttonDivider} />
        <View style={this.styles.buttonWrapper}>
          <ProfileHeaderButton
            onPress={this.props.onCallPress}
            title="Profile.button_call"
            icon={glyphs.call}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <ProfileHeaderWrapper>
        {this.renderAvatar()}
        <ProfileHeaderTitle title={this.props.title} />
        <ProfileHeaderOnline
          online={this.props.online}
          styles={this.styles.online}
        />
        {this.renderButtons()}
      </ProfileHeaderWrapper>
    );
  }
}

export default ProfileHeader;
