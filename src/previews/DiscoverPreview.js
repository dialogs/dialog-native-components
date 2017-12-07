/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { DiscoverCard } from '../types';
import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { group, user, channel, bot } from "../fixtures/peerInfo";
import ContextProvider from '../components/ContextProvider/ContextProvider';
import Discover from "../components/Discover/Discover";

const items = [
  {
    ...group,
    description: group.about,
    members: 23,
    creator: user.title
  },
  {
    ...channel,
    description: channel.about,
    shortname: channel.userName,
    members: 420,
    avatar: null
  },
  {
    ...user,
    description: user.about,
    shortname: user.userName
  },
  {
    ...bot,
    description: bot.about,
    shortname: bot.userName
  }
];

class DiscoverPreview extends PureComponent {
  static navigationOptions = {
    title: 'Discover'
  };

  constructor(props) {
    super(props);

    this.state = {
      cards: {
        value: null,
        pending: true,
        error: null
      }
    };

    setTimeout(() => {
      this.setState({
        cards: {
          value: items,
          pending: false,
          error: null
        }
      });
    }, 1500);
  }

  handleCardTap = (card: DiscoverCard) => {
    Alert.alert(card.title);
  };

  render() {
    return (
      <View style={styles.container}>
        <Discover
          data={this.state.cards}
          onGoToCard={this.handleCardTap}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default DiscoverPreview;
