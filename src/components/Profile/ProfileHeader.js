/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import type { UserOnline } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Avatar from '../Avatar/Avatar';
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

  render() {
    return (
      <ProfileHeaderWrapper>
        {this.renderAvatar()}
        <ProfileHeaderTitle title={this.props.title} />
        <ProfileHeaderOnline
          online={this.props.online}
          styles={this.styles.online}
        />
        <View style={this.styles.buttons}>
          <View style={this.styles.buttonWrapper}>
            <ProfileHeaderButton
              onPress={this.props.onMessagePress}
              title="Message"
              icon="logo"
            />
          </View>
          <View style={this.styles.buttonDivider} />
          <View style={this.styles.buttonWrapper}>
            <ProfileHeaderButton
              onPress={this.props.onCallPress}
              title="Call"
              icon="call"
            />
          </View>
        </View>
      </ProfileHeaderWrapper>
    );
  }
}

export default ProfileHeader;
