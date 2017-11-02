/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Dialpad from '../components/Dialpad/Dialpad';
import contacts from '../fixtures/DialpadData.json';

class DialpadPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contacts: {
        value: [],
        pending: true,
        error: null
      },
      number: ''
    };

    setTimeout(() => {
      this.setState({
        contacts: {
          value: this.getContacts(),
          pending: false,
          error: null
        }
      });
    }, 1000);
  }

  handleCallRequest = (phone) => {
    Alert.alert(`Request call to: ${number}`);
  };

  handleChange = (number: string) => {
    this.setState({
      number,
      contacts: {
        value: this.getContacts(),
        pending: false,
        error: null
      }
    });
  };

  getContacts = () => {
    if (!this.state.number || this.state.number === '' ) {
      return contacts;
    }

    return contacts.reduce((filtered, contact) => {
      const phoneOnlyDigit = contact.phone.replace(/[^0-9]/g, '');
      const index = phoneOnlyDigit.indexOf(this.state.number);

      if (index > 0) {
        filtered.push({
          ...contact,
          select: [index, this.state.number.length]
        });
      }

      return filtered;
    }, []);
  };

  render() {

    return (
      <View style={styles.container}>
        <Dialpad
          contacts={this.state.contacts}
          number={this.state.number}
          onChange={this.handleChange}
          onCallRequest={this.handleCallRequest}
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

export default DialpadPreview;
