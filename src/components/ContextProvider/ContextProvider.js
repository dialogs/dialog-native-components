/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { DiscoverCard as Card } from "../../types";
import React, { PureComponent, Children } from "react";
import PropTypes from 'prop-types';

type Props = {
  theme: Object,
  styles: Object,
  locale: string
};

class ContextProvider extends PureComponent {
  props: Props;

  static defaultProps = {
    theme: {},
    style: {},
    locale: 'en'
  };

  static childContextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  getChildContext() {
    return {
      theme: this.props.theme,
      style: this.props.style,
      locale: this.props.locale
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default ContextProvider;
