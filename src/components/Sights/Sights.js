/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type {
  SightsProps as Props,
  SightsItem as SightsItemType,
  Location
} from '../../types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import SightsItem from '../SightsItem/SightsItem';
import getStyles from './styles';
import { Color } from '../../styles';

type State = {
  current: ?number
};

class Sights extends PureComponent<Props, State> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.state = {
      current: null
    };

    this.styles = getStyles(context.theme, context.style.Sights);
  }

  getKey = (item: SightsItemType, index: number): string => `sight_${index}`;

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

  renderItem = ({ item }: { item: SightsItemType }) => {
    return (
      <SightsItem
        sight={item}
        isOpen={item.id === this.state.current}
        onCardPress={this.handleCardPress}
        onNavRequest={this.handleNavPress}
      />
    );
  };

  renderError() {
    const { data: { error } } = this.props;

    if (!error) {
      return null;
    }

    return (
      <View style={this.styles.fill}>
        <Text>{typeof error === 'string' ? error : error.message}</Text>
      </View>
    );
  }

  renderPending() {
    return (
      <View style={this.styles.fill}>
        <ActivityIndicator
          size="large"
          color={this.context.theme.color.primary || Color.primary}
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
    return <View style={this.styles.container}>{this.renderData()}</View>;
  }
}

export default Sights;
