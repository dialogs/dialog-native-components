/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import Dialpad from "../components/Dialpad/Dialpad";

class DialpadPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contacts: {
        value: [],
        pending: true,
        error: null
      }
    };

    setTimeout(() => {
      this.setState({
        contacts: {
          value: [],
          pending: false,
          error: null
        }
      });
    }, 3000);
  }

  handleCallRequest = (phone) => {
    Alert.alert(`Request chat with: ${phone}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Dialpad
          contacts={this.state.contacts}
          onCallRequest={this.handleCallRequest}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default DialpadPreview;
