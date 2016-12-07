import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { DevTools } from 'containers';
import routes from '../../routes';

// https://gist.github.com/vdh/c241560382d7b3c4aebf68aac66b9446

class Root extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
        <DevTools />
      </Provider>
    );
  }
}

Root.propTypes = {
  // children: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default Root;
