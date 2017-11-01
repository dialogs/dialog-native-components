/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";
import getStyles from './styles';
import { Color } from '../../../styles';
import backspace from '../../../assets/icons/backspace.png';

type Props = {};

type State = {};

class PadNumber extends PureComponent {
  props: Props;
  state: State;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props: Props, context) {
    super(props, context);

    this.state = {};

    this.styles = getStyles(context.theme, context.style.PadNumber);
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.number}>{this.props.value}</Text>
        <Image source={backspace} style={this.styles.backspace} />
      </View>
    );
  }
}

export default PadNumber;
