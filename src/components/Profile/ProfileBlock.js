/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import getStyles from './styles';

type Props = {
  style: any,
  children: any
};

class ProfileBlock extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Profile);
  }

  render() {
    return (
      <View style={[this.styles.block, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

export default ProfileBlock;
