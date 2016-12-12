// ==== Node Modules
import React, { Component, PropTypes } from 'react';
// ==== Local Files
import { HelmetHead, Home } from 'containers';
import { Header, Footer } from 'components';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <HelmetHead />
        <Header />
        <div className="app-content">
          <Home />
        </div>
        <Footer primary />
      </div>
    );
  }
}

export default Layout;
