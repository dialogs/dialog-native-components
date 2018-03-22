/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type {
  Selection,
  InputState,
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
import Pad from './Pad/Pad.android';
import PadNumber from './PadNumber/PadNumber.android';
import PadFooter from './PadFooter/PadFooter';
import getStyles from './styles.android';
import { Color } from '../../styles';
import { insertText, replaceText, handleBackspace } from './inputState';

type State = {
  width: number,
  isLandscape: boolean
};

class Dialpad extends PureComponent<Props, State> {
  styles: Object;

  static defaultProps = {
    isContactsEnabled: true
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context & ProviderContext) {
    super(props, context);

    this.state = {
      isLandscape: false,
      width: 0
    };

    this.styles = getStyles(context.theme, context.style.Dialpad);
  }

  handleChange = (inputState: *) => {
    if (/^[0-9 ()+\-#*]*$/.test(inputState.value)) {
      this.props.onChange(inputState);
    } else {
      // force selection
      this.forceUpdate();
    }
  };

  handleNumberPress = (number: string) => {
    this.props.onChange(insertText(this.props.inputState, number));
  };

  handleCallPress = () => {
    this.props.onCallRequest(this.props.inputState.value);
  };

  handleContactPress = (contact: DialpadContactType) => {
    this.props.onChange(replaceText(contact.phone));
  };

  handleLayoutChange = (event: *) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      width,
      isLandscape: width > height
    });
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
    const { contacts, isContactsEnabled } = this.props;
    const { isLandscape } = this.state;

    if (!isContactsEnabled) {
      return (
        <View
          style={
            isLandscape
              ? this.styles.contactsDisabledLandscape
              : this.styles.contactsDisabled
          }
        />
      );
    }

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
    const { inputState } = this.props;
    const { isLandscape, width } = this.state;
    const isSmallWidth = isLandscape && width < 600;
    return (
      <View
        style={isLandscape ? this.styles.dialpadLandscape : this.styles.dialpad}
      >
        <PadNumber
          inputState={inputState}
          isLandscape={isLandscape}
          isSmallWidth={isSmallWidth}
          onChange={this.handleChange}
        />
        <Pad
          horizontal={this.state.isLandscape}
          onNumberPress={this.handleNumberPress}
          isSmallWidth={isSmallWidth}
        />
        <PadFooter
          horizontal={this.state.isLandscape}
          onCallPress={this.handleCallPress}
          isSmallWidth={isSmallWidth}
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
