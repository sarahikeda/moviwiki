import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../Rating/index.js';
import './index.scss';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rating: '0',
    };
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitReview(this.state);
  }

  selectRating = (rating) => {
    this.setState({
      rating: rating
    });
  }

  render() {
    return (
      <div className="review">
        <form
          onSubmit={this.handleSubmit}
        >
          <Rating handleClick={this.selectRating} />
          <input
            className="comment"
            onChange={this.handleChange}
            placeholder="So, what'd you think?"
            type="text"
          />

          <input
            className="btn btn-info"
            type="submit"
            value="Submit your review"
          />
        </form>
      </div>
    );
  }
};

Review.propTypes = {
  submitReview: PropTypes.func,
};

export default Review;
