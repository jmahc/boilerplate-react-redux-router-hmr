// ==== Node Modules
import React, { Component, PropTypes } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Header extends Component {
  static propTypes = {};
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this._handleClose = this._handleClose.bind(this);
    this._handleToggle = this._handleToggle.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme),
    };
  }

  _handleClose() {
    this.setState(
      {
        open: false,
      },
    );
  }

  _handleToggle() {
    this.setState(
      {
        open: !this.state.open,
      },
    );
    console.log('handleToggle triggered `open`');
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          onRequestChange={({ open }) => this.setState({ open })}
          open={this.state.open}
        >
          <MenuItem onTouchTap={this._handleClose}>
            This might close the drawer.
          </MenuItem>
        </Drawer>
        <AppBar
          onLeftIconButtonTouchTap={this._handleToggle}
          title="My Application Header"
        />
      </div>
    );
  }
}

export default Header;
