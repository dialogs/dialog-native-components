/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type {
  ScheduleProps,
  ScheduleDay as ScheduleDayType
} from '../../types';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, FlatList, SectionList, ActivityIndicator } from 'react-native';
import ScheduleDay from '../ScheduleDay/ScheduleDay';
import ScheduleEvent from '../ScheduleEvent/ScheduleEvent';
import getStyles from './styles';
import { Color } from '../../styles';

class Schedule extends PureComponent {
  props: ScheduleProps;
  styles: Object;

  static defaultProps = {
    hidePastSchedule: true
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Schedule);
  }

  getKey = (item: ScheduleDayType, index: number): string => `schedule_day_${index}`;

  getData = (): ScheduleDayType[] => {
    if (!this.props.hidePastSchedule) {
      return this.props.data.value;
    }

    const data = this.props.data.value.filter((day) => {
      return !(new Date(day.date).getTime() < new Date().getTime());
    });

    return data.length ? data : this.props.data.value;
  };

  getSections = () => {
    const data = this.getData();

    return data.map((day) => {
      return {
        title: day.title,
        data: day.events
      };
    });
  };

  renderItem = ({ item }) => {
    console.log('renderItem', item);

    return (
      <ScheduleEvent
        {...item}
        locale={this.context.locale}
        onNavRequest={this.props.onNavRequest}
      />
    );
  };

  renderSectionHeader = ({section}) => {
    return (
      <ScheduleDay title={section.title} />
    );
  }

  renderError() {
    return (
      <View style={this.styles.fill}>
        <Text>{this.props.data.error}</Text>
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

  renderSchedule() {
    const { data } = this.props;

    if (data.error) {
      return this.renderError();
    }

    if (data.pending) {
      return this.renderPending();
    }

    return (
      <SectionList
        renderItem={this.renderItem}
        keyExtractor={this.getKey}
        renderSectionHeader={this.renderSectionHeader}
        sections={this.getSections()}
        stickySectionHeadersEnabled
      />
    );

    // return (
    //   <FlatList
    //     data={this.getData()}
    //     renderItem={this.renderItem}
    //   />
    // );
  }

  render() {
    return <View style={this.styles.container}>{this.renderSchedule()}</View>;
  }
}

export default Schedule;
