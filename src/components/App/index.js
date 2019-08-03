import React from 'react';
import SearchContainer from '../SearchContainer/index.js';
import FavoritesList from '../FavoritesList/index.js';

import './index.scss';

const App = () => {
  return (
    <div className="app container pb-5">
      <FavoritesList />
      <p className="heading text-left mt-5">moviwiki</p>
      <SearchContainer />
    </div>
  );
};

export default App;
