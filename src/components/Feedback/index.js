import React from 'react';

import './index.scss';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      comment: ''
    });
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div className="feedback">
        <form
          className=""
          onSubmit={this.handleSubmit}
        >
          <input
            className="comment"
            onChange={this.handleChange}
            placeholder="Comment"
            type="text"
            value={this.state.comment}
          />

          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
};

export default Feedback;
