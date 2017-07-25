/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import Avatar from '../Avatar/Avatar';
import getAvatarPlaceholder from '../../utils/getAvatarPlaceholder';
import styles from './styles';

class DiscoverCardIOS extends PureComponent {
  handleClick = () => {
    Alert.alert(this.props.title);
  };

  renderAvatar() {
    const placeholder = getAvatarPlaceholder(this.props.peer.id);

    return (
      <Avatar
        style={styles.avatar}
        image={this.props.avatar}
        placeholder={placeholder}
        title={this.props.title}
        size={56}
      />
    );
  }

  renderShortname() {
    const { shortname } = this.props;

    if (!shortname) {
      return null;
    }

    return (
      <Text style={styles.shortname}>@{shortname}</Text>
    );
  }

  renderIcon() {
    const { type } = this.props;

    switch (type) {
      case 'channel':
        return (
          <Image
            source={require('../../assets/icons/channel.png')}
            style={styles.titleIcon}
          />
        );
      case 'group':
        return (
          <Image
            source={require('../../assets/icons/group.png')}
            style={styles.titleIcon}
          />
        );
      default:
        return null;
    }
  }

  renderTitle() {
    const { title } = this.props;

    return (
      <View style={styles.titleWrapper}>
        {this.renderIcon()}
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleClick} activeOpacity={0.8}>
          <View style={styles.body}>
            {this.renderAvatar()}
            {this.renderTitle()}
            {this.renderShortname()}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DiscoverCardIOS;
