import React from 'react';
import FilledStar from '../../assets/images/filled-star.svg';
import EmptyStar from '../../assets/images/star.svg';

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
        onMouseLeave={this.handleMouseLeave}
        onMouseOver={this.handleMouseOver}
        src={this.state.starImg}
      />
    );

  }
};

export default Star;
