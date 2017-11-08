/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import Avatar from '../Avatar/Avatar';
import getStyles from './styles';
import { Color } from '../../styles';
import getAvatarPlaceholder from "../../utils/getAvatarPlaceholder";

type Props = {
  contact: {
    id: number,
    title: string,
    avatar: ?string,
    phone: string,
    selection?: [number, number]
  }
};

class DialpadContact extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props: Props, context: Object) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.DialpadContact);
  }

  handleButtonPress = () => {
    this.props.onPress(this.props.contact);
  };

  renderAvatar() {
    const { contact } = this.props;
    const placeholder = getAvatarPlaceholder(contact.id);

    return (
      <View style={this.styles.avatarWrapper}>
        <Avatar
          style={this.styles.avatar}
          image={contact.avatar}
          placeholder={placeholder}
          title={contact.title}
          size={44}
        />
      </View>
    );
  }

  renderPhone() {
    const { contact } = this.props;
    if (contact.selection) {
      const [from, to] = contact.selection;

      return (
        <View style={this.styles.phoneWrapper}>
          <Text style={this.styles.phone} numberOfLines={1}>
            {from > 0 ? contact.phone.substring(0, from) : null}
            <Text style={this.styles.phoneHighlight}>
              {contact.phone.substring(from, to)}
            </Text>
            {to < contact.phone.length - 1 ? contact.phone.substring(to) : null}
          </Text>
        </View>
      );
    }

    return (
      <View style={this.styles.phoneWrapper}>
        <Text style={this.styles.phone}>{this.props.contact.phone}</Text>
      </View>
    );
  }

  renderInfo() {
    return (
      <View style={this.styles.info}>
        <View style={this.styles.titleWrapper}>
          <Text style={this.styles.title} numberOfLines={1}>{this.props.contact.title}</Text>
        </View>
        {this.renderPhone()}
      </View>
    )
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <TouchableNativeFeedback
          onPress={this.handleButtonPress}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={this.styles.container} pointerEvents="box-only">
            {this.renderAvatar()}
            {this.renderInfo()}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default DialpadContact;
