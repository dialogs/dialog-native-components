/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, Platform } from 'react-native';

type Props = {
  glyph: string,
  size?: number,
  style?: Object | number
};

class Icon extends PureComponent {
  props: Props;

  static contextTypes = {
    icons: PropTypes.object
  };

  getImage = () => {
    const { glyph } = this.props;

    if (this.context.icons && this.context.icons[glyph]) {
      return { uri: this.context.icons[glyph], cache: 'force-cache' };
    } else if (Platform.OS === 'ios') {
      return null;
    }

    switch (glyph) {
      case 'person':
        return require('../../assets/icons/person.png');
      case 'group':
        return require('../../assets/icons/group.png');
      case 'channel':
        return require('../../assets/icons/channel.png');
      case 'error':
        return require('../../assets/icons/error.png');
      case 'block':
        return require('../../assets/icons/block.png');
      case 'list':
        return require('../../assets/icons/list.png');
      case 'logo':
        return require('../../assets/icons/logo.png');
      case 'star':
        return require('../../assets/icons/star.png');
      case 'star_outline':
        return require('../../assets/icons/star_outline.png');
      case 'call':
        return require('../../assets/icons/call.png');
      case 'notification':
        return require('../../assets/icons/notification.png');
      default:
        return null;
    }
  };

  render() {
    const source = this.getImage();
    if (!source) {
      return null;
    }

    const style = [
      {
        width: this.props.size,
        height: this.props.size
      },
      this.props.style
    ];

    return <Image style={style} source={source} />;
  }
}

export default Icon;
