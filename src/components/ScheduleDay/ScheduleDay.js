/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ScheduleDayProps as Props } from '../../types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import ScheduleEvent from '../ScheduleEvent/ScheduleEvent';
import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import getStyles from './styles';

class ScheduleDay extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ScheduleDay);
  }

  renderEvents() {
    return this.props.events.map((event, index) => {
      return (
        <ScheduleEvent
          key={`schedule_day_event_${index}`}
          {...event}
          onNavRequest={this.props.onNavRequest}
        />
      );
    });
  }

  render() {
    return (
      <Block>
        <View style={this.styles.title}>
          <Icon glyph="arrow" size={28} style={this.styles.arrow} />
          <Text style={this.styles.titleText}>
            {this.props.title.toUpperCase()}
          </Text>
        </View>
        {this.renderEvents()}
      </Block>
    );
  }
}

export default ScheduleDay;
