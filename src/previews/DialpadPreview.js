/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Dialpad from '../components/Dialpad/Dialpad';
import filterContacts from '../utils/filterContacts';
import contactsFixture from '../fixtures/DialpadData.json';
import { focusToEnd } from '../components/Dialpad/inputState';

class DialpadPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputState: {
        value: '+7',
        selection: null
      },
      contacts: {
        value: [],
        pending: true,
        error: null
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        contacts: {
          value: contactsFixture,
          pending: false,
          error: null
        }
      });
    }, 1000);
  }

  handleCallRequest = phone => {
    Alert.alert(`Request call to: ${phone}`);
  };

  handleChange = (inputState: string) => {
    this.setState({ inputState });

    console.log(inputState);

    const query = inputState.value;
    if (query) {
      const isClarify =
        query.length > this.state.query &&
        query.slice(0, this.state.query.lenght) === this.state.query;
      requestAnimationFrame(() => {
        this.setState({
          contacts: {
            value: filterContacts(
              query,
              isClarify ? this.state.contacts.value : contactsFixture
            ),
            pending: false,
            error: null
          }
        });
      });
    } else {
      this.setState({
        contacts: {
          value: contactsFixture,
          pending: false,
          error: null
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Dialpad
          inputState={this.state.inputState}
          isContactsEnabled={false}
          contacts={this.state.contacts}
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
