/**
 * @flow
 */

import React, { Component } from 'react';
import ContextProvider from '../components/ContextProvider/ContextProvider';

function withContext(ChildComponent, theme, style) {
  return class extends Component {
    static displayName = `Context(${ChildComponent.displayName || ChildComponent.name})`;

    render() {
      return (
        <ContextProvider theme={theme} style={style}>
          <ChildComponent {...this.props} />
        </ContextProvider>
      );
    }
  }
}

export default withContext;
