import React, { PureComponent } from 'react';
import { AppRegistry, View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import getAvatarPlaceholder from '../../utils/getAvatarPlaceholder';
import styles from './styles';

class DiscoverCard extends PureComponent {
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
        size={60}
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
    return null;
  }

  renderInfo() {
    const { title, description } = this.props;

    return (
      <View style={styles.info}>
        <View style={styles.titleWrapper}>
          {this.renderIcon()}
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
        {this.renderShortname()}
        <Text numberOfLines={4} style={styles.description}>{description}</Text>
      </View>
    );
  }

  renderMembers() {
    const { members } = this.props;
    if (!members) {
      return null;
    }

    return (
      <View style={styles.members}>
        <Icon
          name="person"
          width={16}
          height={16}
          fill="rgba(0, 0, 0, 0.5)"
          style={styles.membersIcon}
        />
        <Text style={styles.membersText}>{members}</Text>
      </View>
    );
  }

  renderCreator() {
    const { type, creator } = this.props;

    if (!creator) {
      return null;
    }

    return (
      <View style={styles.creator}>
        <Text style={styles.creatorText}>
          created by: <Text style={styles.creatorName}>{creator}</Text>
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this.handleClick} activeOpacity={0.8}>
          <View style={styles.body}>
            {this.renderAvatar()}
            {this.renderInfo()}
          </View>
          <View style={styles.footer}>
            {this.renderMembers()}
            {this.renderCreator()}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('DiscoverCard', () => DiscoverCard);

export default DiscoverCard
