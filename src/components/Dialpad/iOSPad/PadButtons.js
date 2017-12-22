/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Dimensions } from 'react-native';
import getStyles from './styles';
import { Color } from '../../../styles';
import padButtons from '../Pad/padButtons';
import PadButton from './PadButton/PadButton';

type Props = {
  onNumberPress: (value: string) => mixed
};

type State = {};

class PadButtons extends PureComponent<Props, State> {
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

  handleButtonPress = (value: string) => {
    this.props.onNumberPress(value);
  };

  renderButtons() {
    return padButtons.map(button => {
      const text = button.text['en'];

      return (
        <PadButton
          key={`pad_button_${button.title}`}
          value={button.title}
          text={text}
          onPress={this.handleButtonPress}
        />
      );
    });
  }

  render() {
    const { width, height } = Dimensions.get('window');
    console.log({ width, height });
    return (
      <View style={this.styles.buttonsContainer}>{this.renderButtons()}</View>
    );
  }
}

export default PadButtons;
