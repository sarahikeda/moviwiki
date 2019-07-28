import React from 'react';
import PropTypes from 'prop-types';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  formatResults = () => {
    console.log('props', this.props.movieResults.Title)
    return (
      <div>
        <div> {this.props.movieResults.Title}</div> - {this.props.movieResults.Year}
        <p>{this.props.movieResults.Plot}</p>
      </div>
    )
  }


  render() {
    if (this.props.error) {
      return <div>Oops, we've had a hiccup. {this.props.error}</div>;
    } else {
      return this.formatResults();
    }
  }
};

export default Results;
