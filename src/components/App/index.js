import React from 'react';
import SearchContainer from '../SearchContainer/index.js';
import FavoritesList from '../FavoritesList/index.js';

import './index.scss';

const App = () => {
  return (
    <div className="app container">
      <FavoritesList />
      <p className="heading text-left mt-5">moviwiki</p>
      <SearchContainer />
    </div>
  );
};

export default App;
