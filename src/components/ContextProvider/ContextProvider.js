/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { DiscoverCard as Card } from '../../types';
import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';

export type Props = {
  theme: Object,
  styles: Object,
  icons: Object
};

class ContextProvider extends PureComponent {
  props: Props;

  static defaultProps = {
    theme: {},
    style: {},
    icons: {}
  };

  static childContextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    icons: PropTypes.object
  };

  getChildContext() {
    return {
      theme: this.props.theme,
      style: this.props.style,
      icons: this.props.icons
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default ContextProvider;
