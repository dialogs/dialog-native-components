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
import { ScrollView, View, Text, ActivityIndicator, Image } from 'react-native';
import Icon from '../Icon/Icon';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';
import UserProfileActions from './UserProfileActions';
import CustomForm from '../CustomForm/CustomForm';
import getStyles from './styles';
import { Color } from '../../styles';
import { safelyParseJSON, safelyParseJSONSchema } from '../../utils/JSONSchema';

const parseJSON = memoize(safelyParseJSON);
const parseJSONSchema = memoize(safelyParseJSONSchema);

type Props = {
  user: User,
  online: ?UserOnline,
  customProfileSchema: ?JSONSchema,
  onAvatarChange: () => mixed,
  onCustomProfileChange: (value: string) => mixed
};

class UserProfile extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  handleCustomProfileChange = (profile: *) => {
    this.props.onCustomProfileChange(JSON.stringify(profile));
  };

  renderCustomForm() {
    const { user, customProfileSchema } = this.props;
    if (!customProfileSchema) {
      return null;
    }

    const value = user.customProfile ? parseJSON(user.customProfile) : {};
    const schema = parseJSONSchema(customProfileSchema, (error) => console.error(error));
    if (!schema) {
      return null;
    }

    return (
      <CustomForm
        value={value}
        schema={schema}
        onChange={this.handleCustomProfileChange}
      />
    );
  }

  render() {
    const { user } = this.props;

    return (
      <ScrollView style={this.styles.container}>
        <UserProfileHeader
          id={user.id}
          avatar={user.avatar}
          title={user.name}
          onAvatarChange={this.props.onAvatarChange}
        />
        <UserProfileInfo
          nick={user.nick}
          about={user.about}
          phones={user.phones}
          emails={user.emails}
        />
        {this.renderCustomForm()}
        <UserProfileActions />
      </ScrollView>
    );
  }
}

export default UserProfile;
