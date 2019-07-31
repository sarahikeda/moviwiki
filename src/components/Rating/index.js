import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import Star from '../../assets/images/star.svg';

class Rating extends React.Component {
// could reuse the star component?
  handleClick = (e) => {
    this.props.handleClick(e.target.id);
  }

  formatStars = () => {
    // iterate 5 times
    return Array.from([1,2,3,4,5]).map((star, index) => (
      <img
        alt="favorite-star"
        className="favorite-star"
        id={index}
        key={index}
        onClick={this.handleClick}
        src={Star}
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
