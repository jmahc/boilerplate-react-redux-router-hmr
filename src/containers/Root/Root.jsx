import React, {
  Component,
  // PropTypes
} from 'react';
import { Router, hashHistory as history } from 'react-router';
import routes from '../../routes';

// https://gist.github.com/vdh/c241560382d7b3c4aebf68aac66b9446

class Root extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Router history={history}>
        {routes}
      </Router>
    );
  }
}

export default Root;
