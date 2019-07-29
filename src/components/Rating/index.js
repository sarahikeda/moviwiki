import React from 'react';
import './index.scss';
import Favorite from '../../assets/images/search-icon.jpg';

class Rating extends React.Component {

  render() {
    return (
      // can refactor to map these out with each index indicating the rating, rather than hardcoding 5 stars
      <div className="rating">
        <img
          alt="favorite-star"
          className="favorite-star"
          onClick={this.props.handleClick("1")}
          src={Favorite}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          onClick={this.props.handleClick("2")}
          src={Favorite}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          onClick={this.props.handleClick("3")}
          src={Favorite}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          onClick={this.props.handleClick("4")}
          src={Favorite}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          onClick={this.props.handleClick}
          src={Favorite}
        />
      </div>
    );
  }
};

export default Rating;
