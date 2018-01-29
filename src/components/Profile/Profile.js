/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Peer, User, UserOnline } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { JSONSchema } from '../../utils/JSONSchema';
import memoize from 'lodash/memoize';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import Icon from '../Icon/Icon';
import ProfileHeader from './ProfileHeader';
import ProfileActions from './ProfileActions';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileCustomInfo from '../ProfileCustomInfo/ProfileCustomInfo';
import getStyles from './styles';
import { Color } from '../../styles';
import { safelyParseJSON, safelyParseJSONSchema } from '../../utils/JSONSchema';

const parseJSON = memoize(safelyParseJSON);
const parseJSONSchema = memoize(safelyParseJSONSchema);

type Props = {
  user: User,
  online: UserOnline,
  isFavourite: boolean,
  isNotificationsEnabled: boolean,
  customProfileSchema: ?string,
  onUserBlock: () => mixed,
  onCallPress: () => mixed,
  onMessagePress: () => mixed,
  onFavouriteToggle: () => mixed,
  onNotificationsChange: (isNotificationsEnabled: boolean) => mixed
};

class Profile extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Profile);
  }

  renderCustomInfo() {
    const { user, customProfileSchema } = this.props;
    if (!customProfileSchema) {
      return null;
    }

    const value = user.customProfile ? parseJSON(user.customProfile) : {};
    const schema = parseJSONSchema(customProfileSchema, error =>
      console.error(error)
    );
    if (!schema) {
      return null;
    }

    return <ProfileCustomInfo value={value} schema={schema} />;
  }

  render() {
    const { user, online, isFavourite, isNotificationsEnabled } = this.props;

    return (
      <ScrollView style={this.styles.container}>
        <ProfileHeader
          id={user.id}
          title={user.name}
          avatar={user.avatar}
          online={online}
          onMessagePress={this.props.onMessagePress}
          onCallPress={this.props.onCallPress}
        />
        <ProfileInfo
          nick={user.nick}
          about={user.about}
          phones={user.phones}
          emails={user.emails}
          onPhonePress={this.props.onPhonePress}
          onEmailPress={this.props.onEmailPress}
        />
        {this.renderCustomInfo()}
        <ProfileActions
          isFavourite={isFavourite}
          isNotificationsEnabled={isNotificationsEnabled}
          onUserBlock={this.props.onUserBlock}
          onFavouriteToggle={this.props.onFavouriteToggle}
          onNotificationsChange={this.props.onNotificationsChange}
        />
      </ScrollView>
    );
  }
}

export default Profile;
