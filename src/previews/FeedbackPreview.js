/**
 * @flow
 */

import type { DiscoverCard } from '../types';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Feedback from '../components/Feedback/Feedback';

class FeedbackPreview extends PureComponent {
  static navigationOptions = {
    title: 'Feedback'
  };

  handleSubmit = (feedback) => {
    Alert.alert(`Feedback: ${feedback.text}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Feedback onSubmit={this.handleSubmit} />
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

export default FeedbackPreview;
