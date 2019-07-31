import React from 'react';
import SearchContainer from '../SearchContainer/index.js';
import FavoritesList from '../FavoritesList/index.js';

import './index.scss';


const App = () => {
  return (
    <div className="app container">
      <FavoritesList />
      <h1>moviwiki</h1>
      <SearchContainer />
    </div>
  );
};

export default App;
