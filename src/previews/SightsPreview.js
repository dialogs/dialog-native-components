/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Sights from '../components/Sights/Sights';
import data from '../fixtures/SightsData.json';

class SightsPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        value: [],
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
    }, 1500);
  }

  handleNavRequest = location => {
    Alert.alert(
      `Request navigation to: ${location.latitude}, ${location.longitude}`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Sights data={this.state.data} onNavRequest={this.handleNavRequest} />
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

export default SightsPreview;
