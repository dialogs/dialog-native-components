/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { SightsItemProps } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, Text, ActivityIndicator, Image, TouchableNativeFeedback } from "react-native";
import Button from '../Button/Button';
import getStyles from './styles';
import { Color } from '../../styles';

type Props = SightsItemProps;

type State = {
  loading: boolean
};

class SightsItem extends PureComponent {
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

    this.styles = getStyles(context.theme, context.style.SightsItem);
  }

  handleImageLoaded = (): void => {
    this.setState({ loading: false })
  };

  handleCardPress = (): void => {
    this.props.onCardPress(this.props.id);
  };

  handleNavPress = (): void => {
    if (this.props.location) {
      this.props.onNavRequest(this.props.location);
    }
  };

  renderImage() {
    return (
      <Image
        source={{ uri: this.props.image }}
        onLoadEnd={this.handleImageLoaded}
        style={this.props.isOpen ? this.styles.imageLarge : this.styles.imageSmall}
      >
        <ActivityIndicator animating={this.state.loading} color={Color.primary} />
      </Image>
    );
  }

  renderContent() {
    if (!this.props.isOpen) {
      return null;
    }
    const buttonTitle = this.context.locale === 'ru' ? 'Проложить маршрут' : 'Get directions';

    return (
      <View style={this.styles.content}>
        {this.props.location ? (
          <Button
            onPress={this.handleNavPress}
            title={buttonTitle}
          />
        ) : null}
        {this.props.isOpen ? this.renderImage() : null}
        <Text style={this.styles.description}>{this.props.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={[this.styles.container, this.props.isOpen ? this.styles.containerOpened : null]}>
        <TouchableNativeFeedback
          onPress={this.handleCardPress}
          delayPressIn={0}
        >
          <View style={this.styles.cardHeading} pointerEvents="box-only">
            <View style={this.styles.cardHeadingText}>
              <Text style={this.styles.title} numberOfLines={1}>{this.props.title}</Text>
              <Text style={this.styles.address} numberOfLines={1}>{this.props.address}</Text>
            </View>
            {!this.props.isOpen ? this.renderImage() : null}
          </View>
        </TouchableNativeFeedback>
        {this.renderContent()}
      </View>
    );
  }
}

export default SightsItem;
