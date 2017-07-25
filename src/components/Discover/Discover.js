/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from "react";
import { AppRegistry, View, Text, VirtualizedList } from "react-native";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
import styles from "./styles";

class Discover extends PureComponent {
  getItem = (data: any, index: number) => data[index];
  getItemKey = (card: any, index: number) => `card_${index}`;
  getItemCount = (data: any) => data.length;

  renderCard = ({ item, index }) => {
    const isFirst = index === 0;
    return (
      <DiscoverCard
        {...item}
        style={[styles.card, isFirst ? styles.firstCard : null]}
      />
    );
  };

  render() {
    const { data } = this.props;

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
            data={data}
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
