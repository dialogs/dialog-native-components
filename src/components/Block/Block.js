/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import getStyles from './styles';

type Props = {
  title?: string,
  style?: any,
  children: any
};

class Block extends PureComponent {
  props: Props;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Block);
  }

  renderTitle() {
    if (!this.props.title) {
      return null;
    }

    return <Text style={this.styles.title}>{this.props.title}</Text>;
  }

  render() {
    return (
      <View style={[this.styles.container, this.props.style]}>
        {this.renderTitle()}
        {this.props.children}
      </View>
    );
  }
}

export default Block;
