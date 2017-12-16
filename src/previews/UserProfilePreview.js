/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import data from '../fixtures/ProfileData';
import UserProfile from '../components/UserProfile/UserProfile';

class UserProfilePreview extends PureComponent {
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

  handleCustomInfoChange = value => {
    console.log('handleCustomInfoChange', value);
    this.setState({
      data: {
        value: {
          ...this.state.data.value,
          custom: {
            ...this.state.data.value.custom,
            value
          }
        },
        pending: false,
        error: false
      }
    });
  };

  handleAvatarChange = () => {
    console.log('handleAvatarChange');
  };

  render() {
    return (
      <View style={styles.container}>
        <UserProfile
          data={this.state.data}
          onCustomInfoChange={this.handleCustomInfoChange}
          onNotificationsChange={this.handleNotificationChange}
          onFavouriteToggle={this.handleFavouriteToggle}
          onAvatarChange={this.handleAvatarChange}
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

export default UserProfilePreview;
