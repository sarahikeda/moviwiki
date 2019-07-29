import React from 'react';
import './index.scss';
import Star from '../../assets/images/star.svg';

class Rating extends React.Component {
// could reuse the star component?
  handleClick = (e) => {
    this.props.handleClick(e.target.id);
  }

  render() {
    return (
      // can refactor to map these out with each index indicating the rating, rather than hardcoding 5 stars
      <div className="rating">
        <img
          alt="favorite-star"
          className="favorite-star"
          id="1"
          onClick={this.handleClick}
          src={Star}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          id="2"
          onClick={this.handleClick}
          src={Star}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          id="3"
          onClick={this.handleClick}
          src={Star}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          id="4"
          onClick={this.handleClick}
          src={Star}
        />
        <img
          alt="favorite-star"
          className="favorite-star"
          id="5"
          onClick={this.handleClick}
          src={Star}
        />
      </div>
    );
  }
};

export default Rating;
