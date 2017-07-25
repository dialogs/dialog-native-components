/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from "react";
import { AppRegistry, View, Text, VirtualizedList } from "react-native";
import DiscoverCardIOS from "../DiscoverCardIOS/DiscoverCardIOS";
import styles from "./styles";

const COLUMN = 2;

class DiscoverIOS extends PureComponent {
  getItem = (data: any, index: number) => data[index];
  getItemKey = (card: any, index: number) => `card_${index}`;
  getItemCount = (data: any) => Math.floor((data.length + 1) / COLUMN);

  renderCards = (index: number) => {
    const cards = [];

    for (let i = 0; i < COLUMN; i++) {
      const item = this.getItem(this.props.data, index * COLUMN + i);

      cards.push(
        <DiscoverCardIOS {...item} />
      )
    }

    return cards;
  };

  renderRow = ({ index }) => {
    return (
      <View style={styles.row}>
        {this.renderCards(index)}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>DiscoverIOS</Text>
            <Text style={styles.subtitle}>Explore thousands channels, groups, bots and users</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <VirtualizedList
            data={this.props.data}
            renderItem={this.renderRow}
            getItem={this.getItem}
            getItemCount={this.getItemCount}
            keyExtractor={this.getItemKey}
          />
        </View>
      </View>
    );
  }
}

export default DiscoverIOS;
