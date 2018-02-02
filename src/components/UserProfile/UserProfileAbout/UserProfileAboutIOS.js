/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone, Email } from '@dlghq/dialog-types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from '../../Icon/Icon';
import Block from '../../Block/Block';
import BlockText from '../../BlockText/BlockText';
import getStyles from './stylesAndroid';

type Props = {
  about: ?string,
  onAboutChange: () => mixed,
  onNickPress: () => mixed
};

class UserProfileAbout extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.state = {
      about: props.about
    };

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  handleAboutChange = value => {
    console.log('handleAboutChange', value);
    this.setState({ about: value });
  };

  renderEmpty() {
    const { formatText } = this.context.l10n;
    return (
      <TouchableOpacity
        onPress={this.props.onAboutPress}
        activeOpacity={0.8}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
      >
        <View style={this.styles.addWrapper}>
          <Icon glyph="plus_outline" size={24} style={this.styles.addIcon} />
          <Text style={this.styles.addText}>
            {formatText('Profile.about_add_button').toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderValue() {
    return (
      <TouchableOpacity
        onPress={this.props.onAboutPress}
        activeOpacity={0.8}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
      >
        <Text style={this.styles.aboutText}>{this.props.about}</Text>
      </TouchableOpacity>
    );
  }

  renderEditor() {
    return (
      <TextInput
        style={this.styles.aboutInput}
        onChangeText={this.handleAboutChange}
        value={this.state.about}
        multiline={true}
        numberOfLines={3}
        returnKeyType="done"
        keyboardType={this.props.keyboardType}
      />
    );
  }

  renderContent() {
    if (!this.props.about) {
      return this.props.renderEmpty();
    }

    return this.renderValue();
  }

  render() {
    return <BlockText title="Profile.about">{this.renderContent()}</BlockText>;
  }
}

export default UserProfileAbout;
