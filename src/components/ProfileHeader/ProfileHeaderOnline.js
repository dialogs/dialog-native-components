/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { UserOnline } from '@dlghq/dialog-types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import getStyles from './styles';

type Props = {
  online?: ?UserOnline,
  style?: ?*
};

class ProfileHeaderOnline extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.ProfileHeader);
  }

  render() {
    if (!this.props.online) {
      return null;
    }

    return (
      <Text style={[this.styles.online, this.props.style]}>
        {this.props.online.message}
      </Text>
    );
  }
}

export default ProfileHeaderOnline;
