/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Location as Props } from '../../types';
import type { Props as Context } from '../ContextProvider/ContextProvider';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import MapView from 'react-native-maps';
import getStyles from './styles';
import Icon from '../Icon/Icon';
import { Color } from '../../styles';

class Map extends PureComponent<Props> {
  styles: Object;

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    icons: PropTypes.object
  };

  constructor(props: Props, context: Context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.Map);
  }

  getMarkerImage = () => {
    if (this.context.icons && this.context.icons['marker']) {
      return { uri: this.context.icons['marker'], cache: 'force-cache' };
    } else if (Platform.OS === 'ios') {
      return null;
    }

    return require('../../assets/icons/marker.png');
  };

  render() {
    const { latitude, longitude } = this.props;
    const height = 200;

    return (
      <View style={[this.styles.container, { height }]}>
        <MapView
          showsCompass={false}
          rotateEnabled={false}
          showsBuildings
          pitchEnabled={false}
          toolbarEnabled={false}
          cacheEnabled
          scrollEnabled
          showsTraffic={false}
          style={this.styles.map}
          region={{
            latitude,
            longitude,
            longitudeDelta: 0.0091,
            latitudeDelta: 0.0025
          }}
          loadingIndicatorColor={
            this.context.theme.color.primary || Color.primary
          }
        >
          <MapView.Marker
            coordinate={{ latitude, longitude }}
            image={this.getMarkerImage()}
            anchor={{ x: 0.5, y: 1 }}
          />
        </MapView>
      </View>
    );
  }
}

export default Map;
