import React from 'react';
import SearchBar from '../SearchBar/index.js';
import Results from '../Results/index.js';

import './index.scss';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      error: null,
      isLoaded: false,
      movieResult: [],
      rating: '',
    };
  }

  checkIfMovieSaved = (movieTitle = '') => {
    fetch("/movies/" + movieTitle, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((result) => {
      this.setState({
        comment: result.comment,
        rating: result.rating_value,
      });
    });
  }

  performSearch = (movieTitle) => {
    this.checkIfMovieSaved(movieTitle);
    // TODO hide api key in env variable and omit Omdb api call if movie already exists
    fetch("http://www.omdbapi.com/?apikey=55662455&t=" + movieTitle)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Response === 'True') {
            this.setState({
              isLoaded: true,
              movieResult: result
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
          comment={this.state.comment}
          error={this.state.error}
          isLoaded={this.state.isLoaded}
          movieResult={this.state.movieResult}
          rating={this.state.rating}
        />
      </div>
    );
  }
};

export default SearchContainer;
