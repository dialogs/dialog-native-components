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
  style?: any
};

class Icon extends PureComponent<Props> {
  static contextTypes = {
    icons: PropTypes.object
  };

  getImage = () => {
    const { glyph } = this.props;
    if (this.context.icons && this.context.icons[glyph]) {
      return { uri: this.context.icons[glyph], cache: 'force-cache' };
    } else if (this.context.useNativeIcons) {
      return null;
    }

    switch (glyph) {
      case 'arrow':
        return require('../../assets/icons/arrow.png');
      case 'arrow_right':
        return require('../../assets/icons/arrow_right.png');
      case 'backspace':
        return require('../../assets/icons/backspace.png');
      case 'block':
        return require('../../assets/icons/block.png');
      case 'bug':
        return require('../../assets/icons/bug.png');
      case 'call':
        return require('../../assets/icons/call.png');
      case 'camera':
        return require('../../assets/icons/camera.png');
      case 'channel':
        return require('../../assets/icons/channel.png');
      case 'error':
        return require('../../assets/icons/error.png');
      case 'group':
        return require('../../assets/icons/group.png');
      case 'list':
        return require('../../assets/icons/list.png');
      case 'logo':
        return require('../../assets/icons/logo.png');
      case 'marker':
        return require('../../assets/icons/marker.png');
      case 'notification':
        return require('../../assets/icons/notification.png');
      case 'person':
        return require('../../assets/icons/person.png');
      case 'plus_outline':
        return require('../../assets/icons/plus_outline.png');
      case 'question':
        return require('../../assets/icons/question.png');
      case 'security':
        return require('../../assets/icons/security.png');
      case 'star':
        return require('../../assets/icons/star.png');
      case 'star_outline':
        return require('../../assets/icons/star_outline.png');
      default:
        return null;
    }
  };

  render() {
    const source = this.getImage();
    if (!source) {
      return null;
    }

    const style = [this.props.style];
    if (this.props.size) {
      style.push({
        width: this.props.size,
        height: this.props.size
      });
    }

    return <Image style={style} source={source} />;
  }
}

export default Icon;
