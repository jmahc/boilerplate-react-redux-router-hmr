// Node Modules
import React from 'react';
import { Link } from 'react-router';
// import ReactDOM from 'react-dom';

const Home = () => (
  <div>
    <h1>
      Home route :)
    </h1>
    <Link to="/about">Go to about route</Link>
  </div>
);

export default Home;
