import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '../../assets/images/search-icon.jpg';
import Feedback from '../Feedback/index.js';
import Star from '../../assets/images/star.svg';

import './index.scss';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
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
            <p className="title">{movie.Title}, {movie.Year}</p>
            <img
              alt="favorite-star"
              className="favorite-star"
              onClick={this.handleClick}
              src={Favorite}
            />
            <object data={Star} type="image/svg+xml">
              <img src="yourfallback.jpg" />
            </object>
            <p className="plot">{movie.Plot}</p>
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    console.log('like favorite');
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
    // if state is toggled/favorited, show comment and rating and change star to filled in
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
    // add in favorite icon
    return (
      <div className="result">
        {result}
        {this.state.isToggleOn && <Feedback />}
      </div>
    );
  }
};

Results.propTypes = {
  error: PropTypes.string,
  isLoaded: PropTypes.bool,
  movieResults: PropTypes.object,
};

export default Results;
