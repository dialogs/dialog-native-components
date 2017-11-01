/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, VirtualizedList, ActivityIndicator, Text } from "react-native";
import DialpadContact from '../DialpadContact/DialpadContact';
import Pad from './Pad/Pad';
import PadCallButton from './PadCallButton/PadCallButton';
import PadNumber from './PadNumber/PadNumber';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {};

type State = {
  number: string
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
      number: '7'
    };

    this.styles = getStyles(context.theme, context.style.Dialpad);
  }

  handleBackspacePress = () => {
    this.setState({ number: this.state.number.slice(0, -1) });
  };

  handleNumberPress = (value: string) => {
    this.setState({ number: this.state.number + value });
  };

  handleCallPress = () => {
    console.debug('handleCallPress');
  };

  handleContactPress = () => {
    console.debug('handleContactPress');
  };

  getItem = (data: any, index: number) => data[index];
  getItemKey = (contact: any, index: number) => `contact_${contact.id}}`;
  getItemCount = (data: any) => data.length;

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

  renderContact = ({ item, index }) => {
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
        <VirtualizedList
          renderItem={this.renderContact}
          data={contacts.value}
          getItem={this.getItem}
          getItemCount={this.getItemCount}
          keyExtractor={this.getItemKey}
          ListEmptyComponent={this.renderEmpty()}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={this.styles.container}>
        {this.renderContacts()}
        <View style={this.styles.dialpad}>
          <PadNumber value={`+${this.state.number}`} onBackspacePress={this.handleBackspacePress} />
          <Pad style={this.styles.pad} onNumberPress={this.handleNumberPress} />
          <View style={this.styles.padFooter}>
            <PadCallButton onCallPress={this.handleCallPress} />
          </View>
        </View>
      </View>
    );
  }
}

export default Dialpad;
