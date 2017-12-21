/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import type { ProviderContext } from '@dlghq/react-l10n';
import { LocalizationContextType } from '@dlghq/react-l10n';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import getStyles from './styles.android';
import PadButton from '../PadButton/PadButton';
import padButtons from './padButtons';

type Props = {
  horizontal: boolean,
  isSmallWidth: boolean,
  onNumberPress: (value: string) => mixed
};

class Pad extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  constructor(props: Props, context: Context & ProviderContext) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Pad);
  }

  handleButtonPress = (value: string) => {
    this.props.onNumberPress(value);
  };

  renderButtons() {
    return padButtons.map(button => {
      const text = button.text[this.context.l10n.locale]
        ? button.text[this.context.l10n.locale]
        : button.text['en'];

      return (
        <PadButton
          small={this.props.horizontal}
          key={`pad_button_${button.title}`}
          value={button.title}
          text={text}
          onPress={this.handleButtonPress}
          compact={this.props.isSmallWidth}
        />
      );
    });
  }

  render() {
    console.log('Pad android');
    const { isSmallWidth } = this.props;
    const style = [];
    if (this.props.horizontal) {
      style.push(this.styles.horizontal);
    } else {
      style.push(this.styles.container);
    }

    if (isSmallWidth) {
      style.push(this.styles.pullUp);
    }

    return (
      <View style={style}>
        <View style={this.styles.buttons}>{this.renderButtons()}</View>
      </View>
    );
  }
}

export default Pad;
