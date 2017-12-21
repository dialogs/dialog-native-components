/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent, Children, type Node } from 'react';
import PropTypes from 'prop-types';

export type Props = {
  theme: Object,
  style: Object,
  icons: Object,
  children: Node,
  useNativeIcons: boolean
};

class ContextProvider extends PureComponent<Props> {
  static defaultProps = {
    theme: {},
    style: {},
    icons: {},
    useNativeIcons: false
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
