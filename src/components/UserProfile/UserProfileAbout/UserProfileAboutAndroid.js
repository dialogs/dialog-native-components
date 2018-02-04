/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Phone, Email } from '@dlghq/dialog-types';
import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent, type Node } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from '../../Icon/Icon';
import Block from '../../Block/Block';
import BlockText from '../../BlockText/BlockText';
import SmallButton from '../../SmallButton/SmallButton';
import getStyles from './stylesAndroid';
import { Color } from '../../../styles';

type Props = {
  about: ?string,
  onAboutChange: () => mixed,
  onNickPress: () => mixed
};

class UserProfileAbout extends PureComponent<Props> {
  styles: Object;
  input: ?Node;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context) {
    super(props, context);
    this.state = {
      isEditStarted: false
    };

    this.styles = getStyles(context.theme, context.style.UserProfile);
  }

  handleEditStart = () => {
    console.log('handleEditStart');
    this.setState({ isEditStarted: true }, () => {
      this.input.focus();
    });
  };

  handleSavePress = () => {
    console.log('handleEditFinish');
    this.setState({ isEditStarted: false });
  };

  handleCancelPress = () => {
    console.log('handleEditCancel');
    this.setState({ isEditStarted: false });
  };

  renderEmpty() {
    const { formatText } = this.context.l10n;

    return (
      <TouchableOpacity
        onPress={this.handleEditStart}
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
        onPress={this.handleEditStart}
        activeOpacity={0.8}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
      >
        <Text style={this.styles.aboutText}>{this.props.about}</Text>
      </TouchableOpacity>
    );
  }

  renderEditor() {
    const { formatText } = this.context.l10n;

    return (
      <View>
        <TextInput
          ref={input => (this.input = input)}
          style={this.styles.aboutInput}
          onChangeText={this.props.onChange}
          value={this.props.about}
          multiline
          numberOfLines={1}
          returnKeyType="done"
        />
        <View style={this.styles.buttons}>
          <SmallButton
            textColor={Color.primary}
            title="Button.save"
            onPress={this.handleSavePress}
          />
          <SmallButton
            textColor={Color.gray}
            title="Button.cancel"
            onPress={this.handleCancelPress}
          />
        </View>
      </View>
    );
  }

  renderContent() {
    if (this.state.isEditStarted) {
      return this.renderEditor();
    }

    if (this.props.about) {
      return this.renderValue();
    }

    return this.renderEmpty();
  }

  render() {
    return <BlockText title="Profile.about">{this.renderContent()}</BlockText>;
  }
}

export default UserProfileAbout;
