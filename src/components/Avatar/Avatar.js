/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, {PureComponent} from "react";
import { AppRegistry, View, Text, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import type { AvatarPlaceholder } from "@dlghq/dialog-types";
import type { Gradient } from './getAvatarColor';
import getAvatarText from './getAvatarText';
import getAvatarColor from "./getAvatarColor";
import styles from "./styles";

export type Props = {
  styles?: Object,
  size: number,
  image: ?String,
  title: string,
  placeholder: AvatarPlaceholder
};

class Avatar extends PureComponent {
  props: Props;

  getAvatarText(): string {
    return getAvatarText(this.props.title);
  };

  getAvatarColor(): Gradient {
    return getAvatarColor(this.props.placeholder);
  };

  renderGradientAvatar() {
    const { size } = this.props;
    const colors = this.getAvatarColor();
    const gradient = [colors.payload.from, colors.payload.to];
    const style = {
      width: size,
      height: size,
      borderRadius: size / 2
    };

    return (
      <LinearGradient
        colors={gradient}
        style={style}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
      />
    );
  }

  renderImageAvatar() {
    const { image, size } = this.props;
    const style = {
      width: size,
      height: size,
      borderRadius: size / 2
    };

    return (
      <Image
        style={style}
        source={{uri: image}}
      />
    );
  }

  renderAvatar() {
    if (this.props.image) {
      return this.renderImageAvatar();
    }

    return this.renderGradientAvatar();
  }

  renderText() {
    const {image} = this.props;

    if (image) {
      return null;
    }

    const size = this.props.size;
    const text = this.getAvatarText();
    const twoChars = Boolean(text && text.length !== 1);

    const wrapperStyle = {
      width: size,
      height: size,
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: size / 2
    };
    const textStyles = {
      fontSize: twoChars ? size * 0.36 : size * 0.42,
      color: '#fff'
    };

    return (
      <View style={wrapperStyle}>
        <Text style={textStyles}>{text.toUpperCase()}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderAvatar()}
        {this.renderText()}
      </View>
    );
  }
}

AppRegistry.registerComponent("Avatar", () => Avatar);

export default Avatar;
