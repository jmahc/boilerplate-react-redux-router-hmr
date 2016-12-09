import React, { Component, PropTypes } from 'react';
import { HelmetHead } from 'containers';
import { Header } from 'components';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <HelmetHead />
        <Header />
        <div className="content">
          {children}
        </div>
        <div className="footer">
          <hr />
          <h1>FOOTER</h1>
        </div>
      </div>
    );
  }
}
