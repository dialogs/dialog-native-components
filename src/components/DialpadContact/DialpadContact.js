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

type Props = {};

type State = {};

class DialpadContact extends PureComponent {
  props: Props;
  state: State;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props: Props, context) {
    super(props, context);

    this.state = {};

    this.styles = getStyles(context.theme, context.style.DialpadContact);
  }

  handleButtonPress = () => {};

  renderAvatar() {
    const placeholder = getAvatarPlaceholder(parseInt(this.props.contact.phone.replace(/[^0-9]/g, ''), 10));

    return (
      <Avatar
        style={this.styles.avatar}
        image={this.props.contact.avatar}
        placeholder={placeholder}
        title={this.props.contact.title}
        size={44}
      />
    );
  }

  renderPhone() {
    if (!this.props.contact.select) {
      return (
        <View style={this.styles.phoneWrapper}>
          <Text style={this.styles.phone}>{this.props.contact.phone}</Text>
        </View>
      );
    }

    return (
      <View style={this.styles.phoneWrapper}>
        <Text style={this.styles.phone}>
          {this.props.contact.phone.substring(0, this.props.contact.select[0])}
          <Text style={this.styles.phoneHighlight}>
            {this.props.contact.phone.substring(this.props.contact.select[0], this.props.contact.select[1])}
          </Text>
          {this.props.contact.phone.substring(this.props.contact.select[1], this.props.contact.phone.length)}
        </Text>
      </View>
    );
  }

  renderInfo() {
    return (
      <View style={this.styles.info}>
        <View style={this.styles.titleWrapper}>
          <Text style={this.styles.title}>{this.props.contact.title}</Text>
        </View>
        {this.renderPhone()}
      </View>
    )
  }

  render() {
    console.debug('contact', this.props)
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
