/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from "react";
import { Image } from 'react-native';

type Props = {
  glyph: string,
  height?: number,
  width?: number,
  style?: Object
};

class Icon extends PureComponent {
  props: Props;

  getImage = () => {
    const { glyph } = this.props;

    switch (glyph) {
      case 'person':
        return require('../../assets/icons/person.png');
      case 'group':
        return require('../../assets/icons/group.png');
      case 'channel':
        return require('../../assets/icons/channel.png');
      default:
        return null;
    }
  };

  render() {
    const style = [{
      width: this.props.width,
      height: this.props.height
    }, this.props.style];

    return (
      <Image
        style={style}
        source={this.getImage()}
      />
    );
  }
}

export default Icon;
