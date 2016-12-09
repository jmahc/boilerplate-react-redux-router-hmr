// ==== Node Modules
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

// ==== Local Files
import './Footer.scss';

export default class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="footer">
        <AppBar title="My Footer" showMenuIconButton={false} />
      </div>
    );
  }
}
