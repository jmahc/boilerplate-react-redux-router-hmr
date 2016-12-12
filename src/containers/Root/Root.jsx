// ==== Node Modules
import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ==== Local Files
import { Layout as Application } from 'containers';

class Root extends Component {
  static propTypes = {};

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Application />
      </MuiThemeProvider>
    );
  }
}

export default Root;
