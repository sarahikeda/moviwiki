import React from 'react';
import SearchBar from '../SearchBar/index.js';
import Results from '../Results/index.js';

import './index.scss';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movieResults: [],
    };
  }

  performSearch = (query) => {
    // TODO implement using ajax
    // hide api key in env variable
    fetch("http://www.omdbapi.com/?apikey=55662455&t=" + query)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Response === 'True') {
            this.setState({
              isLoaded: true,
              movieResults: result
            });
          } else {
            this.setState({
              error: result.Error
            });
          }
        }
      );
  }

  render() {
    return (
      <div>
        <SearchBar performSearch={this.performSearch} />

        <Results
          error={this.state.error}
          isLoaded={this.state.isLoaded}
          movieResults={this.state.movieResults}
        />
      </div>
    );
  }
};

export default SearchContainer;
