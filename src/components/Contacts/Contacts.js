/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type {
  ContactsProps,
  ContactsItem as ContactsItemType
} from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import ContactsItem from '../ContactsItem/ContactsItem';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = ContactsProps;

type State = {
  current: ?number
};

class Contacts extends PureComponent {
  props: Props;
  state: State;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context) {
    super(props, context);

    this.state = {
      current: null
    };

    this.styles = getStyles(context.theme, context.style.Contacts);
  }

  getKey = (item: ContactsItemType, index: number): string =>
    `contact_${index}`;

  handleCardPress = (current: number): void => {
    if (this.state.current === current) {
      this.setState({ current: null });
    } else {
      this.setState({ current });
    }
  };

  handleChatRequest = (phone: string): void => {
    this.props.onChatRequest(phone);
  };

  renderItem = ({ item }) => {
    return (
      <ContactsItem
        {...item}
        isOpen={item.id === this.state.current}
        onCardPress={this.handleCardPress}
        onChatRequest={this.handleChatRequest}
      />
    );
  };

  renderError() {
    const { data: { error } } = this.props;

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

export default Contacts;
