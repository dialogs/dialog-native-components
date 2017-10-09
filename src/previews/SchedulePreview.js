/**
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Schedule from '../components/Schedule/Schedule';
import data from '../fixtures/ScheduleData.json';

class SchedulePreview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        value: null,
        pending: true,
        error: null
      }
    };

    setTimeout(() => {
      this.setState({
        data: {
          value: data,
          pending: false,
          error: false
        }
      });
    } , 3000);
  }

  handleNavRequest = location => {
    Alert.alert(
      `Request navigation to: ${location.latitude}, ${location.longitude}`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Schedule
          data={this.state.data}
          onNavRequest={this.handleNavRequest}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default SchedulePreview;
