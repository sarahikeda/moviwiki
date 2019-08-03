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

  handleClick = (e) => {
    this.setState({
      starImg: require('../../assets/images/filled-star.svg'),
    });

    this.props.handleClickBehavior(e);
  }

  render() {
    return (
      <img
        alt="star icon"
        className="favorite-star"
        id={this.props.id}
        onClick={this.handleClick}
        onMouseLeave={this.handleMouseLeave}
        onMouseOver={this.handleMouseOver}
        src={this.state.starImg}
      />
    );

  }
};

Star.propTypes = {
  handleClickBehavior: PropTypes.func,
  id: PropTypes.string,
};

export default Star;
