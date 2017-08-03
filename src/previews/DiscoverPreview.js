/**
 * @flow
 */

import type { DiscoverCard } from '../types';
import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { group, user, channel, bot } from "../fixtures/peerInfo";
import ContextProvider from '../components/ContextProvider/ContextProvider';
import Discover from "../components/Discover/Discover";

const items = [];
for (let i = 0; i < 4; i++) {
  items.push({
    ...group,
    description: group.about,
    members: 23,
    creator: user.title,
  });
  items.push({
    ...channel,
    description: channel.about,
    shortname: channel.userName,
    members: 420,
    avatar: null
  });
  items.push({
    ...user,
    description: user.about,
    shortname: user.userName
  });
  items.push({
    ...bot,
    description: bot.about,
    shortname: bot.userName
  });
};

class DiscoverPreview extends PureComponent {
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
    }, 3000);
  }

  handleCardTap = (card: DiscoverCard) => {
    Alert.alert(card.title);
  };

  render() {
    const theme = {
      color: {
        primary: '#e4002b'
      }
    };
    const style = {};

    return (
      <ContextProvider theme={theme} style={style}>
        <View style={styles.container}>
          <Discover
            data={this.state.cards}
            onGoToCard={this.handleCardTap}
          />
        </View>
      </ContextProvider>
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
