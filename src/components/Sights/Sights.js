/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { SightsProps, SightsItem as SightsItemType , Location } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import SightsItem from '../SightsItem/SightsItem';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = SightsProps;

type State = {
  current: ?number
};

class Sights extends PureComponent {
  props: Props;
  state: State;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props: Props, context) {
    super(props, context);

    this.state = {
      current: null
    };

    this.styles = getStyles(context.theme, context.style.Sights);
  }

  getKey = (item: SightsItem, index: number): string => `sight_${index}`;

  handleCardPress = (current: number): void => {
    if (this.state.current === current) {
      this.setState({ current: null });
    } else {
      this.setState({ current });
    }
  };

  handleNavPress = (location: Location): void => {
    this.props.onNavRequest(location);
  };

  renderItem = ({ item }) => {
    return (
      <SightsItem
        {...item}
        isOpen={item.id === this.state.current}
        onCardPress={this.handleCardPress}
        onNavRequest={this.handleNavPress}
        locale={this.context.locale}
      />
    );
  };

  renderError() {
    const { data: { error } } = this.props;

    return (
      <View style={this.styles.fill}>
        <Text>
          {typeof error === 'string' ? error : error.message}
        </Text>
      </View>
    );
  }

  renderPending() {
    return (
      <View style={this.styles.fill}>
        <ActivityIndicator
          size="large"
          color={Color.primary}
        />
      </View>
    );
  }

  renderData() {
    const { data } = this.props;

    if (data.error) {
      return this.renderError();
    }

    if (data.pending) {
      return this.renderPending();
    }

    return (
      <FlatList
        data={this.props.data.value}
        extraData={this.state.current}
        keyExtractor={this.getKey}
        renderItem={this.renderItem}
      />
    );
  }

  render() {
    return (
      <View style={this.styles.container}>
        {this.renderData()}
      </View>
    );
  }
}

export default Sights;
