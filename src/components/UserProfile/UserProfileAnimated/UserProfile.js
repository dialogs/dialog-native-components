/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Peer, User, UserOnline } from '@dlghq/dialog-types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import type { JSONSchema } from '../../../utils/JSONSchema';
import memoize from 'lodash/memoize';
import PropTypes from 'prop-types';
import React, { PureComponent, type Node } from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Image,
  Animated,
  LayoutAnimation
} from 'react-native';
import Icon from '../../Icon/Icon';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from '../UserProfileInfo/UserProfileInfo';
import UserProfileActions from '../UserProfileActions/UserProfileActions';
import CustomForm from '../../CustomForm/CustomForm';
import getStyles from './styles';
import { Color } from '../../../styles';
import {
  safelyParseJSON,
  safelyParseJSONSchema
} from '../../../utils/JSONSchema';

const parseJSON = memoize(safelyParseJSON);
const parseJSONSchema = memoize(safelyParseJSONSchema);

const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

type Props = {
  user: User,
  online: ?UserOnline,
  customProfileSchema: ?JSONSchema,
  onAvatarChange: () => mixed,
  onCustomProfileChange: (value: string) => mixed,
  onEmailPress: (phone: string) => mixed,
  onPhonePress: (email: string) => mixed,
  onAboutPress: () => mixed,
  onNickPress: () => mixed,
  onBackPress: () => mixed
};

type State = {
  scrollY: *,
  screenWidth: ?number
};

class UserProfile extends PureComponent<Props, State> {
  styles: Object;
  scrollView: ?Node;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.state = {
      scrollY: new Animated.Value(0)
    };

    this.scrollView = null;

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  handleCustomProfileChange = (profile: *) => {
    this.props.onCustomProfileChange(JSON.stringify(profile));
  };

  handleScrollEndSnapToEdge = ({ nativeEvent: { contentOffset: { y } } }) => {
    if (0 < y && y < HEADER_SCROLL_DISTANCE / 2) {
      if (this.scrollView) {
        this.scrollView._component.scrollTo({ y: 0 });
      }
    } else if (HEADER_SCROLL_DISTANCE / 2 <= y && y < HEADER_SCROLL_DISTANCE) {
      if (this.scrollView) {
        this.scrollView._component.scrollTo({ y: HEADER_SCROLL_DISTANCE });
      }
    }
  };

  setScrollView = scrollView => {
    this.scrollView = scrollView ? scrollView : null;
  };

  renderCustomForm() {
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

    return (
      <CustomForm
        value={value}
        schema={schema}
        onChange={this.handleCustomProfileChange}
      />
    );
  }

  renderScrollViewContent() {
    const { user } = this.props;
    return (
      <View style={this.styles.scrollViewContent}>
        <UserProfileInfo
          about={user.about}
          nick={user.nick}
          phones={user.phones}
          emails={user.emails}
          onAboutPress={this.props.onAboutPress}
          onNickPress={this.props.onNickPress}
          onPhonePress={this.props.onPhonePress}
          onEmailPress={this.props.onEmailPress}
        />
        {this.renderCustomForm()}
        <UserProfileActions />
      </View>
    );
  }

  renderHeader() {
    const { user } = this.props;

    return (
      <UserProfileHeader
        scrollY={this.state.scrollY}
        id={user.id}
        avatar={user.avatar}
        title={user.name}
        onAvatarChange={this.props.onAvatarChange}
        onBackPress={this.props.onBackPress}
      />
    );
  }

  render() {
    return (
      <View style={this.styles.fill}>
        {this.renderHeader()}
        <Animated.ScrollView
          style={this.styles.fill}
          ref={this.setScrollView}
          onScrollEndDrag={this.handleScrollEndSnapToEdge}
          onMomentumScrollEnd={this.handleScrollEndSnapToEdge}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={1}
          keyboardShouldPersistTaps="always"
        >
          {this.renderScrollViewContent()}
        </Animated.ScrollView>
      </View>
    );
  }
}

export default UserProfile;
