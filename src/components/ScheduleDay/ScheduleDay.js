/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ScheduleDayProps } from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";
import ScheduleEvent from '../ScheduleEvent/ScheduleEvent';
import getStyles from './styles';
import arrow from '../../assets/icons/arrow.png';

class ScheduleDay extends PureComponent {
  props: ScheduleDayProps;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ScheduleDay);
  }

  renderEvents() {
    return this.props.events.map((event, index) => {
      return (
        <ScheduleEvent
          key={`schedule_day_event_${index}`}
          {...event}
          locale={this.context.locale}
          onNavRequest={this.props.onNavRequest}
        />
      );
    });
  }

  render() {
    return (
      <View style={this.styles.container}>
        <View style={this.styles.dayTitle}>
          <Image source={arrow} style={this.styles.dayTitleArrow} />
          <Text style={this.styles.dayTitleText}>
            {this.props.title.toUpperCase()}
          </Text>
        </View>
        {this.renderEvents()}
      </View>
    );
  }
}

export default ScheduleDay;
