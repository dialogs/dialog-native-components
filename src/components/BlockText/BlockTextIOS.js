/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import { LocalizationContextType } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import getStyles from './stylesIOS';

type Props = {
  title?: ?string,
  style?: ?*,
  children?: ?*,
  borderless: boolean
};

class BlockText extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    l10n: LocalizationContextType
  };

  static defaultProps = {
    borderless: false
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.BlockText);
  }

  renderTitle() {
    if (!this.props.title) {
      return null;
    }

    const { formatText } = this.context.l10n;

    return (
      <Text style={this.styles.title}>
        {formatText(this.props.title).toUpperCase()}
      </Text>
    );
  }

  render() {
    const componentStyles = [this.styles.container, this.props.style];
    if (!this.props.borderless) {
      componentStyles.push(this.styles.withBorder);
    }

    return (
      <View style={componentStyles}>
        {this.renderTitle()}
        {this.props.children}
      </View>
    );
  }
}

export default BlockText;
