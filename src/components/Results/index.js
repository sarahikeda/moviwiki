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
    // TO DO if there is no poster, put a placeholder
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
              <Star toggleComments={this.toggleComments} />
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
    // post rating, comment, and movie info
    $.ajax({
      url: '/reviews',
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify(this.state),
      success: () => {
        this.setState({
          isToggleOn: false,
        });
      },
      error: (xhr, status, err) => {
        console.log(status);
        console.log(err);
        // TO DO display error to user
      }
    });
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
        {this.state.isToggleOn && <Feedback submitReview={this.extractMovieInfo} />}
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
