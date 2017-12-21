/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PadCallButton from '../PadCallButton/PadCallButton';
import getStyles from './styles';

type Props = {
  onCallPress: () => mixed,
  isSmallWidth: boolean,
  horizontal: boolean
};

class PadFooter extends PureComponent<Props> {
  context: Context;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.PadFooter);
  }

  render() {
    console.log({ ...this.props });
    const { horizontal, isSmallWidth } = this.props;
    const style = [this.styles.container];
    if (horizontal) {
      style.push(this.styles.horizontal);
    }

    return (
      <View style={style}>
        <PadCallButton
          onCallPress={this.props.onCallPress}
          small={isSmallWidth}
        />
      </View>
    );
  }
}

export default PadFooter;
