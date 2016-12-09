import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="header">
        <AppBar title="My AppBar" />
      </div>
    );
  }
}
