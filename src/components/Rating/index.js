import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star/index.js';

import './index.scss';

class Rating extends React.Component {
  retrieveRating = (e) => {
    this.props.handleClick(e.target.id);
  }

  formatStars = () => {
    // iterate to make 5 stars
    return Array.from([1,2,3,4,5]).map((star, index) => (
      <Star
        handleClickBehavior={this.retrieveRating}
        id={index}
        key={index}
      />
    ));
  }

  render() {
    const formatStars = this.formatStars();
    return <div>{formatStars}</div>;
  }
};

Rating.propTypes = {
  handleClick: PropTypes.func,
};

export default Rating;
