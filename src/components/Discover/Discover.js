/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { DiscoverCard as Card } from "../../types";
import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { AppRegistry, View, Text, VirtualizedList } from "react-native";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
import getStyles from "./styles";

type Props = {
  data: Card[],
  onGoToCard: (card: Card) => mixed
};

class Discover extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Discover);
  }

  getItem = (data: any, index: number) => data[index];
  getItemKey = (card: any, index: number) => `card_${index}`;
  getItemCount = (data: any) => data.length;

  renderCard = ({ item, index }) => {
    return (
      <DiscoverCard
        card={item}
        onGoToCard={this.props.onGoToCard}
        style={[
          this.styles.card,
          index === 0 ? this.styles.firstCard : null
        ]}
      />
    );
  };

  render() {
    return (
      <View style={this.styles.container}>
        <View style={this.styles.header}>
          <View style={this.styles.headerText}>
            <Text style={this.styles.title}>Discover</Text>
            <Text style={this.styles.subtitle}>Explore thousands channels, groups, bots and users</Text>
          </View>
        </View>
        <View style={this.styles.cards}>
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
