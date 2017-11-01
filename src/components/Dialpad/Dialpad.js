/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import Pad from './Pad/Pad';
import PadCallButton from './PadCallButton/PadCallButton';
import PadNumber from './PadNumber/PadNumber';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = {};

type State = {};

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

    this.state = {};

    this.styles = getStyles(context.theme, context.style.Dialpad);
  }

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

  renderConatcts() {
    const { contacts } = this.props;

    if (contacts.error) {
      return this.renderError();
    }

    if (contacts.pending) {
      return this.renderPending();
    }

    return (
      <View style={this.styles.contacts}>
        <Text>Contacts</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={this.styles.container}>
        {this.renderConatcts()}
        <View style={this.styles.dialpad}>
          <PadNumber value={'+79992093464'} />
          <Pad style={this.styles.pad} />
          <View style={this.styles.padFooter}>
            <PadCallButton />
          </View>
        </View>
      </View>
    );
  }
}

export default Dialpad;
