/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Switch,
  TextInput
} from 'react-native';
import styles from './styles';

type Feedback = {
  text: string,
  addLogs: boolean
};

type Props = {
  onSubmit: (feedback: Feed) => mixed
};

class Discover extends PureComponent {
  props: Props;
  state: Feedback;

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      addLogs: true
    };
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  handleTextChange = (text: string) => {
    this.setState({ text });
  };

  handleAddLogsChange = (addLogs: boolean) => {
    this.setState({ addLogs });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          multiline={true}
          returnKeyType="send"
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.handleSubmit}
        />
        <Switch
          value={this.state.addLogs}
          onValueChange={this.handleAddLogsChange}
        />
      </View>
    );
  }
}

export default Discover;
