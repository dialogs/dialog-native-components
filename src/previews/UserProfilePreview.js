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

    this.state = data;
  }

  handleCustomProfileChange = value => {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        customProfile: value
      }
    });
  };

  handleAvatarChange = () => {
    Alert.alert('Change avatar action');
  };

  handleAboutPress = () => {
    Alert.alert('Change user about action');
  };

  handleNickPress = () => {
    Alert.alert('Change user nickname action');
  };

  handlePhonePress = phone => {
    Alert.alert(`Request call to ${phone}`);
  };

  handleEmailPress = email => {
    Alert.alert(`Request write message to ${email}`);
  };

  handleBackPress = () => {
    Alert.alert(`Go to previous screen`);
  };

  render() {
    return (
      <View style={styles.container}>
        <UserProfile
          user={this.state.profile}
          online={this.state.online}
          customProfileSchema={this.state.customProfileSchema}
          onCustomProfileChange={this.handleCustomProfileChange}
          onAvatarChange={this.handleAvatarChange}
          onAboutPress={this.handleAboutPress}
          onNickPress={this.handleNickPress}
          onPhonePress={this.handlePhonePress}
          onEmailPress={this.handleEmailPress}
          onBackPress={this.handleBackPress}
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
