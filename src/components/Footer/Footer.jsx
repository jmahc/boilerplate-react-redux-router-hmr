// ==== Node Modules
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
// ==== Local Files
import './Footer.scss';

class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="footer">
        <AppBar
          showMenuIconButton={false}
          title="My Footer"
        />
      </div>
    );
  }
}

export default Footer;
