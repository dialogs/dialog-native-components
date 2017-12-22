/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PadNumber from './PadNumber';
import PadButtons from './PadButtons';
import PadFooter from './PadFooter';
import getStyles from './styles';
import { Color } from '../../../styles';

type Props = {
  width: number,
  inputState: any,
  onChange: () => mixed,
  onCallPress: () => mixed,
  onNumberPress: () => mixed
};

type State = {};

class Pad extends PureComponent<Props, State> {
  styles: Object;

  static defaultProps = {};

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context & ProviderContext) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Pad);
  }

  render() {
    return (
      <View style={this.styles.container}>
        <PadNumber
          inputState={this.props.inputState}
          onChange={this.props.onChange}
        />
        <PadButtons
          onNumberPress={this.props.onNumberPress}
          width={this.props.width}
        />
        <PadFooter
          inputState={this.props.inputState}
          onChange={this.props.onChange}
        />
      </View>
    );
  }
}

export default Pad;
