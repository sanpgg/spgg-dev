/* eslint-disable react/state-in-constructor */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const lazyLoader = (importComp) => {
  return class extends React.Component {
    state = {
      component: null
    };

    // loading the component and setting it to state
    componentDidMount() {
      importComp().then((comp) => this.setState({ component: comp.default }));
    }

    // rendering the component
    render() {
      const C = this.state.component;
      return C ? (<C {...this.props} />) : null;
    }
  };
};
export default lazyLoader;
