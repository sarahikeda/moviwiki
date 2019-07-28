import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search/index.js';

import '../assets/styles/App.scss';


const App = () => {
  return (
    <div className="app">
      <h1>movie</h1>
      <Search />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
