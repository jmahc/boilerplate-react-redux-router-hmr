// ==== Node Modules
import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ==== Local Files
import routes from '../../routes';

class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    const { history } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={history} routes={routes} />
      </MuiThemeProvider>
    );
  }
}

export default Root;
