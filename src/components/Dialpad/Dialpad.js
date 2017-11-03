/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import DialpadContact from '../DialpadContact/DialpadContact';
import Pad from './Pad/Pad';
import PadNumber from './PadNumber/PadNumber';
import PadFooter from './PadFooter/PadFooter';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {
  query: string,
  onChange: (query: string) => mixed,
  onCallRequest: (phone: string) => mixed
};

type State = {
  isLandscape: boolean
};

class Dialpad extends PureComponent {
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
      isLandscape: false
    };

    this.styles = getStyles(context.theme, context.style.Dialpad);
  }

  handleBackspacePress = () => {
    this.props.onChange(this.props.query.slice(0, -1));
  };

  handleNumberPress = (value: string) => {
    this.props.onChange(this.props.query + value);
  };

  handleCallPress = () => {
    this.props.onCallRequest(this.props.query);
  };

  handleContactPress = (contact) => {
    this.props.onChange(contact.phone);
  };

  handleLayoutChange = (event) => {
    const { width, height } = event.nativeEvent.layout;

    this.setState({
      isLandscape: width > height
    });
  };

  getItemKey = (contact: any, index: number) => contact.id;

  renderError() {
    const { contacts: { error } } = this.props;

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
          color={this.context.theme.color.primary || Color.primary}
        />
      </View>
    );
  }

  renderEmpty() {
    return (
      <View style={this.styles.empty}>
        <Text>Nothing found</Text>
      </View>
    );
  }

  renderContact = ({ item }) => {
    return (
      <DialpadContact
        contact={item}
        onPress={this.handleContactPress}
      />
    );
  };

  renderContacts() {
    const { contacts } = this.props;

    if (contacts.error) {
      return this.renderError();
    }

    if (contacts.pending) {
      return this.renderPending();
    }

    return (
      <View style={this.styles.contacts}>
        <FlatList
          data={contacts.value}
          renderItem={this.renderContact}
          getItem={this.getItem}
          keyExtractor={this.getItemKey}
          ListEmptyComponent={this.renderEmpty()}
        />
      </View>
    );
  }

  renderPad() {
    const { isLandscape } = this.state;

    return (
      <View style={isLandscape ? this.styles.dialpadLandscape : this.styles.dialpad}>
        <PadNumber
          value={this.props.query}
          small={this.state.isLandscape}
          onBackspacePress={this.handleBackspacePress}
        />
        <Pad
          horizontal={this.state.isLandscape}
          onNumberPress={this.handleNumberPress}
        />
        <PadFooter
          horizontal={this.state.isLandscape}
          onCallPress={this.handleCallPress}
        />
      </View>
    );
  }

  render() {
    return (
      <View
        style={this.state.isLandscape ? this.styles.containerLandscape : this.styles.container} onLayout={this.handleLayoutChange}
      >
        {this.renderContacts()}
        {this.renderPad()}
      </View>
    );
  }
}

export default Dialpad;
