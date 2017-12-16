/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import data from '../fixtures/ProfileData';
import Profile from '../components/Profile/Profile';

class ContactsPreview extends PureComponent {
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
    }, 1500);
  }

  handleNotificationChange = value => {
    this.setState({
      data: {
        value: {
          ...this.state.data.value,
          isNotificationsEnabled: value
        },
        pending: false,
        error: false
      }
    });
  };

  handleFavouriteToggle = () => {
    this.setState({
      data: {
        value: {
          ...this.state.data.value,
          isFavourite: !this.state.data.value.isFavourite
        },
        pending: false,
        error: false
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Profile
          data={this.state.data}
          onNotificationsChange={this.handleNotificationChange}
          onFavouriteToggle={this.handleFavouriteToggle}
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

export default ContactsPreview;
