import React from 'react';
import Rating from '../Rating/index.js';
import './index.scss';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      comment: '',
      rating: 0,
    });
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit = () => {
    // save review and comment to database
    // make sure that movie info is associated (what info needs to be saved)
    //validation check
    console.log(this.state, 'status');

    fetch("http://www.omdbapi.com/?apikey=55662455&t=", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rating: this.state.rating,
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Response === 'True') {
            this.setState({
              isLoaded: true,
              movieResults: result
            });
          } else {
            this.setState({
              error: result.Error
            });
          }
        }
      );

  }

  selectRating = (rating) => {
    console.log(rating, 'rating');
    this.setState({
      rating: rating
    });
  }

  render() {
    return (
      <div className="feedback">
        <form
          className=""
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
