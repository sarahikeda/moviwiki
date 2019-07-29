import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Results extends React.Component {
  formatResults = () => {
    const movie = this.props.movieResults;
    // if there is no poster, put a placeholder
    return (
      <div className="movie-result">
        <div className="movie-info">
          <img
            alt="movie-poster"
            className="movie-poster"
            src={movie.Poster}
          />
          <p className="title">{movie.Title}</p> <span>{movie.Year}</span>
        </div>
        <p className="plot"> {movie.Plot}</p>
      </div>
    );
  }


  render() {
    let result;
    if (this.props.error) {
      result = (
        <div>
          Oops, we've had a hiccup. {this.props.error}
        </div>
      );
    } else if (this.props.movieResults && this.props.isLoaded) {
      result = this.formatResults();
    }

    return (
      <div>{result}</div>
    );
  }
};

Results.propTypes = {
  error: PropTypes.string,
  isLoaded: PropTypes.boolean,
  movieResults: PropTypes.array,
};

export default Results;
