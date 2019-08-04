import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star/index.js';
import Review from '../Review/index.js';

import './index.scss';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isSubmitted: false,
      isStarFilled: false,
      movieTitle: '',
      moviePoster: '',
      movieYear: '',
      moviePlot: '',
    };
  }

  formatResults = () => {
    const movie = this.props.movieResults;
    // TO DO if there is no poster, put a placeholder
    return (
      <div className="movie-result m-4 p-4">
        <div className="movie-info">
          <img
            alt="movie-poster"
            className="movie-poster"
            src={movie.Poster}
          />
          <div>
            <p className="title py-3">
              {movie.Title}, {movie.Year}
              <Star
                handleClickBehavior={this.toggleComments} />
            </p>
            <p className="plot">{movie.Plot}</p>
          </div>
        </div>
      </div>
    );
  }

  toggleComments = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  extractMovieInfo = (reviewData) => {
    this.setState({
      comment: reviewData.comment,
      rating: reviewData.rating,
      movieTitle: this.props.movieResults.Title,
      moviePoster: this.props.movieResults.Poster,
      movieYear: this.props.movieResults.Year,
      moviePlot: this.props.movieResults.Plot
    }, () => this.submitReview());
  }

  submitReview = () => {
    fetch('/reviews', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.json())
    .then(response =>
      this.setState({
        isToggleOn: false,
        isSubmitted: true,
      })
    )
    .catch(error => console.error('Error:', error));
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
      <div className="result container">
        {result}

        {this.state.isSubmitted && <p className="pb-4">Review submitted!</p>}

        {this.state.isToggleOn && <Review submitReview={this.extractMovieInfo} />}
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
