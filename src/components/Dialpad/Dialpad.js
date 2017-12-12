/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type {
  Selection,
  DialpadProps as Props,
  DialpadContact as DialpadContactType
} from '../../types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { ProviderContext } from '@dlghq/react-l10n';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { LocalizationContextType } from '@dlghq/react-l10n';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import DialpadContact from '../DialpadContact/DialpadContact';
import Pad from './Pad/Pad';
import PadNumber from './PadNumber/PadNumber';
import PadFooter from './PadFooter/PadFooter';
import getStyles from './styles';
import { Color } from '../../styles';

type State = {
  isLandscape: boolean,
  selection: Selection
};

class Dialpad extends PureComponent<Props, State> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context & ProviderContext) {
    super(props, context);

    this.state = {
      isLandscape: false,
      selection: {
        start: 0,
        end: 0
      }
    };

    this.styles = getStyles(context.theme, context.style.Dialpad);
  }

  handleBackspacePress = () => {
    const { start, end } = this.state.selection;

    if (start === end) {
      if (start !== 0) {
        this.props.onChange(
          this.props.query.substr(0, start - 1) + this.props.query.substr(end)
        );
      }
    } else {
      this.props.onChange(
        this.props.query.substr(0, start) + this.props.query.substr(end)
      );
    }
  };

  handleNumberPress = (value: string) => {
    const { start, end } = this.state.selection;
    const query =
      this.props.query.substr(0, start) + value + this.props.query.substr(end);
    const newCursorPosition =
      start + 1 < query.length ? start + 1 : query.length;

    this.props.onChange(query);

    this.setState({
      selection: {
        start: newCursorPosition,
        end: newCursorPosition
      }
    });
  };

  handleCallPress = () => {
    this.props.onCallRequest(this.props.query);
  };

  handleContactPress = (contact: DialpadContactType) => {
    this.props.onChange(contact.phone);
  };

  handleLayoutChange = (event: *) => {
    const { width, height } = event.nativeEvent.layout;

    this.setState({
      isLandscape: width > height
    });
  };

  handleSelectionChange = (selection: Selection) => {
    this.setState({ selection });
  };

  getItemKey = (contact: any, index: number) => contact.id;

  renderError() {
    const { contacts: { error } } = this.props;

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

  renderEmpty() {
    return (
      <View style={this.styles.empty}>
        <Text style={this.styles.emptyText}>
          {this.context.l10n.formatText('Error.nothing_found')}
        </Text>
      </View>
    );
  }

  renderContact = ({ item }: { item: DialpadContactType }) => {
    return <DialpadContact contact={item} onPress={this.handleContactPress} />;
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
          keyExtractor={this.getItemKey}
          ListEmptyComponent={this.renderEmpty()}
        />
      </View>
    );
  }

  renderPad() {
    const { isLandscape } = this.state;

    return (
      <View
        style={isLandscape ? this.styles.dialpadLandscape : this.styles.dialpad}
      >
        <PadNumber
          value={this.props.query}
          selection={this.state.selection}
          small={this.state.isLandscape}
          onSelectionChange={this.handleSelectionChange}
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
        style={
          this.state.isLandscape
            ? this.styles.containerLandscape
            : this.styles.container
        }
        onLayout={this.handleLayoutChange}
      >
        {this.renderContacts()}
        {this.renderPad()}
      </View>
    );
  }
}

export default Dialpad;
