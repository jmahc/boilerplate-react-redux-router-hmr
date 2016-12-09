// ==== Node Modules
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// ==== Material-UI
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ==== Local Files
import { DevTools } from 'containers';
import routes from '../../routes';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Router history={history} routes={routes}>
            <DevTools />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
