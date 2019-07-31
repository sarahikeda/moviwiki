import React from 'react';
import Rating from '../Rating/index.js';
import './index.scss';

class Feedback extends React.Component {
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
      <div className="feedback">
        <form
          onSubmit={this.handleSubmit}
        >
          <Rating handleClick={this.selectRating} />
          <input
            className="comment"
            onChange={this.handleChange}
            placeholder="Comment"
            type="text"
          />

          <input
            type="submit"
            value="Submit your review"
          />
        </form>
      </div>
    );
  }
};

export default Feedback;
