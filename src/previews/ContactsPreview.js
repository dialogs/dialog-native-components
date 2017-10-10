/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import data from '../fixtures/ContactsData.json';
import Contacts from "../components/Contacts/Contacts";

class ContactsPreview extends PureComponent {
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
    }, 3000);
  }

  handleChatRequest = (phone) => {
    Alert.alert(`Request chat with: ${phone}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Contacts
          data={this.state.data}
          onChatRequest={this.handleChatRequest}
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

export default ContactsPreview;
