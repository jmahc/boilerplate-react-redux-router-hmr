// ==== Node Modules
import React, { Component } from 'react';

class Loading extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <div className="loader-header">
          <i className="loader-wrench material-icons wrench-rotate">&#xE869;</i>
          <h1>
            Please be patient while Webpack builds.
            <span className="loader-rotate" />
          </h1>
        </div>
        <div className="loader">Loading...</div>
      </div>
    );
  }
}

export default Loading;
