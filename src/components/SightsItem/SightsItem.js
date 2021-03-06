/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { SightsItemProps as Props } from '../../types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
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

class SightsItem extends PureComponent<Props, State> {
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

    this.styles = getStyles(context.theme, context.style.SightsItem);
  }

  handleImageLoaded = (): void => {
    this.setState({ loading: false });
  };

  handleCardPress = (): void => {
    this.props.onCardPress(this.props.sight.id);
  };

  handleNavPress = (): void => {
    if (this.props.sight.location) {
      this.props.onNavRequest(this.props.sight.location);
    }
  };

  renderImage() {
    return (
      <ImageBackground
        source={{ uri: this.props.sight.image }}
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
        {this.props.sight.location ? (
          <Button onPress={this.handleNavPress} title="Button.get_direction" />
        ) : null}
        {this.props.isOpen ? this.renderImage() : null}
        <Text style={this.styles.description}>{this.props.sight.description}</Text>
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
                {this.props.sight.title}
              </Text>
              <Text style={this.styles.address} numberOfLines={1}>
                {this.props.sight.address}
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

export default SightsItem;
