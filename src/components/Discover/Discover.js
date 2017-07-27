/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Peer } from "@dlghq/dialog-types";
import React, { PureComponent } from "react";
import { AppRegistry, View, Text, VirtualizedList } from "react-native";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
import styles from "./styles";

type Props = {
  onCardTap: (peer: Peer) => mixed
};

class Discover extends PureComponent {
  props: Props;

  getItem = (data: any, index: number) => data[index];
  getItemKey = (card: any, index: number) => `card_${index}`;
  getItemCount = (data: any) => data.length;

  renderCard = ({ item, index }) => {
    return (
      <DiscoverCard
        {...item}
        onCardTap={this.props.onCardTap}
        style={[
          styles.card,
          index === 0 ? styles.firstCard : null
        ]}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>Discover</Text>
            <Text style={styles.subtitle}>Explore thousands channels, groups, bots and users</Text>
          </View>
        </View>
        <View style={styles.cards}>
          <VirtualizedList
            renderItem={this.renderCard}
            data={this.props.data}
            getItem={this.getItem}
            getItemCount={this.getItemCount}
            keyExtractor={this.getItemKey}
          />
        </View>
      </View>
    );
  }
}

export default Discover;
