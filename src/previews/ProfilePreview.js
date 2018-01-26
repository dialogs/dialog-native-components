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
      data
    };
  }

  handleNotificationChange = value => {
    this.setState({
      data: {
        ...this.state.data,
        isNotificationsEnabled: value
      }
    });
  };

  handleFavouriteToggle = () => {
    this.setState({
      data: {
        ...this.state.data,
        isFavourite: !this.state.data.isFavourite
      }
    });
  };

  handleUserBlock = () => {
    console.debug('handleUserBlock');
  };

  handleCallPress = () => {
    console.debug('handleCallPress');
  };

  handleMessagePress = () => {
    console.debug('handleMessagePress');
  };

  render() {
    return (
      <View style={styles.container}>
        <Profile
          user={this.state.data.profile}
          online={this.state.data.online}
          isFavourite={this.state.data.isFavourite}
          isNotificationsEnabled={this.state.data.isNotificationsEnabled}
          customProfileSchema={this.state.data.customProfileSchema}
          onNotificationsChange={this.handleNotificationChange}
          onFavouriteToggle={this.handleFavouriteToggle}
          onUserBlock={this.handleUserBlock}
          onCallPress={this.handleCallPress}
          onMessagePress={this.handleMessagePress}
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
