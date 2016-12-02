import React, {
  Component,
  // PropTypes
} from 'react';
// import ReactDOM from 'react-dom';
import { Router, hashHistory as history } from 'react-router';
import routes from '../../routes';

// https://gist.github.com/vdh/c241560382d7b3c4aebf68aac66b9446

// const Root = ({ history, routes }) => (
//   <Router history={history}>
//     {routes}
//   </Router>
// );


// class Root extends Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     // const { history } = this.props;
//     return (
//       <Router history={history} routes={routes} />
//     );
//   }
// }

class Root extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Router history={history}>
        {routes}
      </Router>
    );
  }
}

// const renderApp = () => {
//   const routes = require('./routes');
//
//   // Sync routes both on client and server
//   match({ history, routes }, (error, redirectLocation, renderProps) => {
//     ReactDOM.render(
//       <AppContainer>
//         <Router {...renderProps} />
//       </AppContainer>,
//       mountNode,
//     );
//   });
// };

// Root.propTypes = {
//   // history: PropTypes.object.isRequired,
//   // routes: PropTypes.object.isRequired,
// };

export default Root;
