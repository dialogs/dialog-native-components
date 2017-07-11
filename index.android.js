/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { group, user, channel, bot } from "./src/fixtures/peerInfo";
import Discover from "./src/components/Discover/Discover";

export default class AwesomeProject extends Component {
  render() {
    const items = [];

    for (let i = 0; i < 4; i++) {
      items.push({
        ...group,
        description: group.about,
        members: 23,
        creator: user.title
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
    }

    return (
      <View style={styles.container}>
        <Discover data={items} />
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

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
