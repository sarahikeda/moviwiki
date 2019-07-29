import React from 'react';
import Search from '../Search/index.js';
import FavoritesList from '../FavoritesList/index.js';

import './index.scss';


const App = () => {
  return (
    <div className="app">
      <FavoritesList />
      <h1>moviwiki</h1>
      <Search />
    </div>
  );
};

export default App;
