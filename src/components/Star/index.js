import React from 'react';
import PropTypes from 'prop-types';


class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starImg: require('../../assets/images/star.svg'),
    };
  }

  handleMouseOver = () => {
    this.setState ({
      starImg: require('../../assets/images/filled-star.svg'),
    });
  }

  handleMouseLeave = () => {
    this.setState({
      starImg: require('../../assets/images/star.svg'),
    });
  }

  render() {
    return (
      <img
        alt="star icon"
        className="favorite-star"
        onClick={this.props.toggleComments}
        onMouseLeave={this.handleMouseLeave}
        onMouseOver={this.handleMouseOver}
        src={this.state.starImg}
      />
    );

  }
};

Star.propTypes = {
  toggleComments: PropTypes.func,
};

export default Star;
