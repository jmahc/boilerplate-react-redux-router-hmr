// import React from 'react';
//
// const App = ({ children }) => (
//   <div className="layout">
//     <div className="header">
//       <h1>HEADER!</h1>
//       <hr />
//     </div>
//     <div className="content">
//       {children}
//     </div>
//     <div className="footer">
//       <hr />
//       <h1>FOOTER</h1>
//     </div>
//   </div>
// );
//
// App.propTypes = {
//   children: React.PropTypes.element.isRequired,
// };
//
// export default App;

import React from 'react';

class App extends React.Component {
  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
