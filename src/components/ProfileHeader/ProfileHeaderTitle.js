/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import getStyles from './styles';

type Props = {
  title?: ?string
};

class ProfileHeaderTitle extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileHeader);
  }

  render() {
    if (!this.props.title) {
      return null;
    }

    return (
      <Text style={[this.styles.title, this.props.style]}>
        {this.props.title}
      </Text>
    );
  }
}

export default ProfileHeaderTitle;
