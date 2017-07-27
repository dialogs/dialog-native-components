/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Peer } from "@dlghq/dialog-types";
import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import getAvatarPlaceholder from "../../utils/getAvatarPlaceholder";
import styles from "./styles";

type Props = {
  avatar: ?string,
  title: string,
  shortname?: string,
  description?: string,
  members?: number,
  creator?: string,
  peer: Peer,
  onCardTap: (peer: Peer) => mixed
};

class DiscoverCard extends PureComponent {
  props: Props;

  handleCardTap = () => {
    this.props.onCardTap(this.props.peer);
  };

  renderAvatar() {
    const placeholder = getAvatarPlaceholder(this.props.peer.id);

    return (
      <Avatar
        style={styles.avatar}
        image={this.props.avatar}
        placeholder={placeholder}
        title={this.props.title}
        size={66}
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
      case "channel":
      case "group":
        return (
           <Icon
             glyph={type}
             style={styles.titleIcon}
             width={24}
             height={24}
           />
        );
      default:
        return null;
    }
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
        <Text numberOfLines={4} style={styles.description}>
          {description}
        </Text>
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
          style={styles.membersIcon}
          glyph="person"
          width={18}
          height={18}
        />
        <Text style={styles.membersText}>
          {members}
        </Text>
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

  renderFooter() {
    return (
      <View style={styles.footer}>
        {this.renderMembers()}
        {this.renderCreator()}
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this.handleCardTap} activeOpacity={0.8}>
          <View style={styles.body}>
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
