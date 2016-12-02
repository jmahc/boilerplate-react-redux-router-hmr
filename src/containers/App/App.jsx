import React from 'react';
// import ReactDOM from 'react-dom';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function, max-len
  render() {
    const { children } = this.props; // eslint-disable-line react/prop-types
    return (
      <div className="layout">
        <div className="header">
          <h1>HEADER!</h1>
          <hr />
        </div>
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
//
// if (__DEVELOPMENT__ && module.hot) {
//   module.hot.accept('./App.jsx');
// }

// export default App;
