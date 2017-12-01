/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { DiscoverCard as Card } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import getAvatarPlaceholder from '../../utils/getAvatarPlaceholder';
import getStyles from './styles';

type Props = {
  style?: Object,
  card: Card,
  onGoToCard: (card: Card) => mixed
};

class DiscoverCard extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.DiscoverCard);
  }

  handleCardTap = () => {
    this.props.onGoToCard(this.props.card);
  };

  renderAvatar() {
    const { card: { avatar, title, peer: { id } } } = this.props;
    const placeholder = getAvatarPlaceholder(id);

    return (
      <Avatar
        style={this.styles.avatar}
        image={avatar}
        placeholder={placeholder}
        title={title}
        size={66}
      />
    );
  }

  renderShortname() {
    const { card: { shortname } } = this.props;

    if (!shortname) {
      return null;
    }

    return <Text style={this.styles.shortname}>@{shortname}</Text>;
  }

  renderIcon() {
    const { card: { type } } = this.props;

    switch (type) {
      case 'channel':
      case 'group':
        return <Icon glyph={type} style={this.styles.titleIcon} size={24} />;
      default:
        return null;
    }
  }

  renderInfo() {
    const { card: { title, description } } = this.props;

    return (
      <View style={this.styles.info}>
        <View style={this.styles.titleWrapper}>
          {this.renderIcon()}
          <Text numberOfLines={1} style={this.styles.title}>
            {title}
          </Text>
        </View>
        {this.renderShortname()}
        <Text numberOfLines={4} style={this.styles.description}>
          {description}
        </Text>
      </View>
    );
  }

  renderMembers() {
    const { card: { members } } = this.props;

    if (!members) {
      return null;
    }

    return (
      <View style={this.styles.members}>
        <Icon
          style={this.styles.membersIcon}
          glyph="person"
          width={18}
          height={18}
        />
        <Text style={this.styles.membersText}>{members}</Text>
      </View>
    );
  }

  renderCreator() {
    const { card: { type, creator } } = this.props;

    if (!creator) {
      return null;
    }

    return (
      <View style={this.styles.creator}>
        <Text style={this.styles.creatorText}>
          created by: <Text style={this.styles.creatorName}>{creator}</Text>
        </Text>
      </View>
    );
  }

  renderFooter() {
    return (
      <View style={this.styles.footer}>
        {this.renderMembers()}
        {this.renderCreator()}
      </View>
    );
  }

  render() {
    return (
      <View style={[this.styles.container, this.props.style]}>
        <TouchableOpacity onPress={this.handleCardTap} activeOpacity={0.8}>
          <View style={this.styles.body}>
            {this.renderAvatar()}
            {this.renderInfo()}
          </View>
          {/* {this.renderFooter()} */}
        </TouchableOpacity>
      </View>
    );
  }
}

export default DiscoverCard;
