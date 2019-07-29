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

  handleClick = () => {
    this.setState({
      starImg: require('../../assets/images/filled-star.svg'),
    });
    this.props.toggleComments();
  }

  render() {
    return (
      <img
        alt="star icon"
        className="favorite-star"
        onClick={this.handleClick}
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
