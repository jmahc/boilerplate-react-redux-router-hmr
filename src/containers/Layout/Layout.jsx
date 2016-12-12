// ==== Node Modules
import React, { Component, PropTypes } from 'react';
// ==== Local Files
import { HelmetHead } from 'containers';
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
          {children}
        </div>
        <Footer primary />
      </div>
    );
  }
}

export default Layout;
