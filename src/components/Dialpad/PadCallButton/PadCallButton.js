/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Props as Context } from '../../ContextProvider/ContextProvider';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import getStyles from './styles';
import call from '../../../assets/icons/call.png';

type Props = {
  onCallPress: () => mixed,
  small: boolean
};

class PadCallButton extends PureComponent<Props> {
  context: Context;
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.PadCallButton);
  }

  render() {
    const { small } = this.props;
    const buttonStyles = small ? this.styles.small : this.styles.normal;
    const iconStyles = small ? this.styles.iconSmall : this.styles.iconNormal;

    return (
      <TouchableNativeFeedback
        onPress={this.props.onCallPress}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
      >
        <View style={[this.styles.container, buttonStyles]}>
          <Image source={call} style={iconStyles} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default PadCallButton;
