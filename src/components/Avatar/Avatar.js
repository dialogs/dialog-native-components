/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, {PureComponent} from "react";
import {AppRegistry, View, Text, Image} from "react-native";
import Svg, {
  LinearGradient,
  Defs,
  Circle,
  Stop
} from "react-native-svg";
import type {AvatarPlaceholder} from "@dlghq/dialog-types";
import type {Gradient} from './getAvatarColor';
import getAvatarText from './getAvatarText';
import getAvatarColor from "./getAvatarColor";
import createSequence from '../../utils/createSequence';
import styles from "./styles";

export type Props = {
  styles?: Object,
  size: number,
  image: ?String,
  title: string,
  placeholder: AvatarPlaceholder,
  id: number
};

const seq = createSequence();

class Avatar extends PureComponent {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.id = 'avatar_' + seq.next();
    console.log(this.id);
  }

  getAvatarText(): string {
    return getAvatarText(this.props.title);
  };

  getAvatarColor(): Gradient {
    return getAvatarColor(this.props.placeholder);
  };

  renderGradientAvatar() {
    const colors = this.getAvatarColor();
    return (
      <Svg
        viewBox="0 0 100 100"
        width={this.props.size}
        height={this.props.size}
        style={{ position: 'absolute', left: 0, top: 0}}
      >
        <Defs>
          <LinearGradient
            id={this.id}
            gradientUnits="userSpaceOnUse"
            x1="6.79%"
            y1="105.31%"
            x2="93.21%"
            y2="-5.31%"
          >
            <Stop offset="0%" stopColor={colors.payload.from}/>
            <Stop offset="100%" stopColor={colors.payload.to}/>
          </LinearGradient>
        </Defs>
        <Circle
          fill={`url(#${this.id})`}
          cx="50"
          cy="50"
          r="50"
        />
      </Svg>
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
