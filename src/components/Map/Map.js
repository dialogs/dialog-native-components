/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from "react";
import { Image, ActivityIndicator } from "react-native";
import styles from './styles';
import { Color } from '../../styles';

type Prop = {
  latitude: number,
  longitude: number
};
type State = {
  loading: boolean
}

const API_KEY = 'AIzaSyCV9I5_GAlbDMcVnD87TcONL2YaPv_d-LA';

class Map extends PureComponent {
  props: Props;

  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  handleImageLoaded = (): void => {
    this.setState({ loading: false });
  };

  render() {
    const { latitude, longitude } = this.props;
    const marker = 'https://dlg.im/assets/megapolis/images/marker.png';
    const width = 360;
    const height = 140;
    const zoom = 15;
    const uri = `https://maps.googleapis.com/maps/api/staticmap?zoom=${zoom}&size=${width}x${height}&markers=icon:${marker}%7C${latitude},${longitude}&scale=2&key=${API_KEY}`;

    return (
      <Image
        source={{ uri }}
        onLoadEnd={this.handleImageLoaded}
        style={[styles.map, { height }]}
        resizeMode="cover"
      >
        <ActivityIndicator animating={this.state.loading} color={Color.primary} />
      </Image>
    );
  }
}

export default Map;