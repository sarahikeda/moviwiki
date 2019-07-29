import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star/index.js';
import Feedback from '../Feedback/index.js';

import './index.scss';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isStarFilled: false,
      movieTitle: '',
      moviePoster: '',
      movieYear: '',
      moviePlot: '',
    };
  }

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
          <div>
            <p className="title">
              {movie.Title}, {movie.Year}
              <Star toggleComments={this.handleClick} />
            </p>
            <p className="plot">{movie.Plot}</p>
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  extractMovieInfo = () => {
    this.setState({
      movieTitle: this.props.movieResults.Title,
      moviePoster: this.props.movieResults.Poster,
      movieYear: this.props.movieResults.Year,
      moviePlot: this.props.movieResults.Plot
    }, () => console.log(this.state, 'sttt'));
  }

  submitReview = (reviewData) => {
    // post rating, comment, and movie info
    console.log('handle review', reviewData)

    this.extractMovieInfo();
    console.log('movie data', this.state)
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
      <div className="result">
        {result}
        {this.state.isToggleOn && <Feedback submitReview={this.submitReview} />}
      </div>
    );
  }
};

Results.propTypes = {
  error: PropTypes.string,
  isLoaded: PropTypes.bool,
  movieResults: PropTypes.obj,
};

export default Results;
