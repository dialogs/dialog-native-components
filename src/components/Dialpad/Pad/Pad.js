/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import getStyles from './styles';
import { Color } from '../../../styles';
import PadButton from './PadButton';
import padButtons from './padButtons';
type Props = {};

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

    this.state = {};

    this.styles = getStyles(context.theme, context.style.Pad);
  }

  handleButtonPress = (value: string) => {
    console.debug('value', value);
  };

  renderButtons() {
    return padButtons.map(button => {
      const text = button.text[this.context.locale]
        ? button.text[this.context.locale]
        : button.text['en'];

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
    return (
      <View style={[this.styles.container, this.props.style]}>
        <View style={this.styles.buttons}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

export default Pad;
