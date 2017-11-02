/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import getStyles from './styles';
import PadButton from '../PadButton/PadButton';
import padButtons from './padButtons';

type Props = {
  horizontal: boolean,
  onNumberPress: (value: string) => mixed
};

type State = {};

class Pad extends PureComponent {
  props: Props;
  state: State;
  context: Context;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
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
      const text = button.text[this.context.locale]
        ? button.text[this.context.locale]
        : button.text['en'];

      return (
        <PadButton
          small={this.props.horizontal}
          key={`pad_button_${button.title}`}
          value={button.title}
          text={text}
          onPress={this.handleButtonPress}
        />
      );
    });
  }

  render() {
    const style = this.props.horizontal ? this.styles.horizontal : this.styles.container;

    return (
      <View style={style}>
        <View style={this.styles.buttons}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

export default Pad;
