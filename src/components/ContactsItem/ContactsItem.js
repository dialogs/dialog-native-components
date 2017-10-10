/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ContactsItemProps } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import Button from '../Button/Button';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = ContactsItemProps;

type State = {
  loading: boolean
};

class ContactsItem extends PureComponent {
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
      loading: true
    };

    this.styles = getStyles(context.theme, context.style.ContactsItem);
  }

  handleImageLoaded = (): void => {
    this.setState({ loading: false })
  };

  handleCardPress = (): void => {
    this.props.onCardPress(this.props.id);
  };

  handleButtonPress = (): void => {
    if (this.props.phone) {
      this.props.onChatRequest(this.props.phone);
    }
  };

  renderImage() {
    if (!this.props.photo) {
      return null;
    }

    return (
      <Image
        source={{ uri: this.props.photo }}
        onLoadEnd={this.handleImageLoaded}
        style={this.props.isOpen ? this.styles.imageLarge : this.styles.imageSmall}
      >
        <ActivityIndicator
          animating={this.state.loading}
          color={this.context.theme.color.primary || Color.primary}
        />
      </Image>
    );
  }

  renderContent() {
    if (!this.props.isOpen) {
      return null;
    }
    const buttonTitle = this.context.locale === 'ru' ? 'Открыть чат' : 'Open chat';

    return (
      <View style={this.styles.content}>
        <Text style={this.styles.region}>{this.props.region}</Text>
        {this.props.isOpen ? this.renderImage() : null}
        {this.props.phone ? (
          <Button
            onPress={this.handleButtonPress}
            title={buttonTitle}
          />
        ) : null}
      </View>
    );
  }

  render() {
    console.log('ContactItem', this.props);

    return (
      <View style={[this.styles.container, this.props.isOpen ? this.styles.containerOpened : null]}>
        <TouchableNativeFeedback
          onPress={this.handleCardPress}
          delayPressIn={0}
        >
          <View style={this.styles.cardHeading} pointerEvents="box-only">
            <View style={this.styles.cardHeadingText}>
              <Text style={this.styles.title} numberOfLines={1}>{this.props.title}</Text>
              <Text style={this.styles.position} numberOfLines={1}>{this.props.position} 123123</Text>
            </View>
            {!this.props.isOpen ? this.renderImage() : null}
          </View>
        </TouchableNativeFeedback>
        {this.renderContent()}
      </View>
    );
  }
}

export default ContactsItem;
