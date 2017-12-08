/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ScheduleEvent as ScheduleEventProps } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import Button from '../Button/Button';
import Map from '../Map/Map';
import Icon from '../Icon/Icon';
import getStyles from './styles';
import { Color } from '../../styles';

type State = {
  loading: boolan,
  isOpen: boolean
};

class ScheduleEvent extends PureComponent {
  props: ScheduleEventProps;
  state: State;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: ScheduleEventProps, context) {
    super(props, context);

    this.state = {
      loading: true,
      isOpen: false
    };

    this.styles = getStyles(context.theme, context.style.ScheduleEvent);
  }

  handleImageLoaded = (): void => {
    this.setState({ loading: false });
  };

  handleHeaderPress = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleNavPress = (): void => {
    if (this.props.location) {
      this.props.onNavRequest(this.props.location);
    }
  };

  hasContent(): boolean {
    const { description } = this.props;

    return Boolean(description || this.hasLocation());
  }

  hasLocation(): boolean {
    const { location } = this.props;

    return Boolean(location && (location.latitude && location.longitude));
  }

  renderSubtitle() {
    const { time, address } = this.props;
    const divider = time && address ? '  /  ' : null;

    return (
      <View style={this.styles.subtitle}>
        <Text style={this.styles.subtitleText} numberOfLines={1}>
          {time}
          {divider}
          {address}
        </Text>
        {this.hasLocation() && !this.state.isOpen ? (
          <Icon glyph="marker" size={20} style={this.styles.subtitleMarker} />
        ) : null}
      </View>
    );
  }

  renderHeader() {
    if (this.hasContent()) {
      return (
        <TouchableNativeFeedback onPress={this.handleHeaderPress}>
          <View style={this.styles.header} pointerEvents="box-only">
            <View style={this.styles.headerText}>
              <Text style={[this.styles.title, this.styles.titleLocation]}>
                {this.props.title}
              </Text>
              {this.renderSubtitle()}
            </View>
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <View style={this.styles.header}>
        <View style={this.styles.headerText}>
          <Text style={this.styles.title}>{this.props.title}</Text>
          {this.renderSubtitle()}
        </View>
      </View>
    );
  }

  renderDescription() {
    const { description } = this.props;

    if (!description) {
      return null;
    }

    return <Text style={this.styles.description}>{description}</Text>;
  }

  renderLocation() {
    if (!this.hasLocation()) {
      return null;
    }

    const { location } = this.props;

    return (
      <View style={this.styles.location}>
        {location ? (
          <Map latitude={location.latitude} longitude={location.longitude} />
        ) : null}
        <Button onPress={this.handleNavPress} title="Button.get_direction" />
      </View>
    );
  }

  renderContent() {
    if (!this.hasContent() || !this.state.isOpen) {
      return null;
    }

    return (
      <View style={this.styles.content}>
        {this.renderDescription()}
        {this.renderLocation()}
      </View>
    );
  }

  render() {
    return (
      <View
        style={[
          this.styles.container,
          this.state.isOpen ? this.styles.containerOpened : null
        ]}
      >
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}

export default ScheduleEvent;
