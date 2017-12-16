/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import type { ContactsItemProps as Props } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import Button from '../Button/Button';
import getStyles from './styles';
import { Color } from '../../styles';

type State = {
  loading: boolean
};

class ContactsItem extends PureComponent<Props, State> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.state = {
      loading: true
    };

    this.styles = getStyles(context.theme, context.style.ContactsItem);
  }

  handleImageLoaded = (): void => {
    this.setState({ loading: false });
  };

  handleCardPress = (): void => {
    this.props.onCardPress(this.props.contact.id);
  };

  handleButtonPress = (): void => {
    if (this.props.contact.phone) {
      this.props.onChatRequest(this.props.contact.phone);
    }
  };

  renderImage() {
    if (!this.props.contact.photo) {
      return null;
    }

    return (
      <ImageBackground
        source={{ uri: this.props.contact.photo }}
        onLoadEnd={this.handleImageLoaded}
        style={
          this.props.isOpen ? this.styles.imageLarge : this.styles.imageSmall
        }
      >
        <ActivityIndicator
          animating={this.state.loading}
          color={this.context.theme.color.primary || Color.primary}
        />
      </ImageBackground>
    );
  }

  renderContent() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <View style={this.styles.content}>
        <Text style={this.styles.region}>{this.props.contact.region}</Text>
        {this.props.isOpen ? this.renderImage() : null}
        {this.props.contact.phone ? (
          <Button onPress={this.handleButtonPress} title="Button.open_chat" />
        ) : null}
      </View>
    );
  }

  render() {
    return (
      <View
        style={[
          this.styles.container,
          this.props.isOpen ? this.styles.containerOpened : null
        ]}
      >
        <TouchableNativeFeedback onPress={this.handleCardPress}>
          <View style={this.styles.cardHeading} pointerEvents="box-only">
            <View style={this.styles.cardHeadingText}>
              <Text style={this.styles.title} numberOfLines={1}>
                {this.props.contact.title}
              </Text>
              <Text style={this.styles.position} numberOfLines={1}>
                {this.props.contact.position}
              </Text>
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
