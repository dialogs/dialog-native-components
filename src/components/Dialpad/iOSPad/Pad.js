/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import type { Selection, InputState } from '../../../types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PadNumber from './PadNumber';
import PadButtons from './PadButtons';
import PadFooter from './PadFooter';
import getStyles from './styles';
import { Color } from '../../../styles';

type Props = {
  inputState: any,
  onChange: (inputState: InputState) => mixed,
  onCallPress: () => mixed,
  onNumberPress: (value: string) => mixed
};

type State = {};

class Pad extends PureComponent<Props, State> {
  styles: Object;

  static defaultProps = {};

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
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
        <PadButtons onNumberPress={this.props.onNumberPress} />
        <PadFooter
          inputState={this.props.inputState}
          onChange={this.props.onChange}
          onCallPress={this.props.onCallPress}
        />
      </View>
    );
  }
}

export default Pad;
