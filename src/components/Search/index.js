import React from 'react';
import PropTypes from 'prop-types';
import SearchImage from '../../assets/images/search-icon.jpg';

import './index.scss';

class Search extends React.Component {
  handleClick() {
    console.log('hi')
  }

  render() {
    return (
      <div>
        <img
          className="search-icon"
          onClick={this.handleClick}
          src={SearchImage}
          alt="magnifying-glass"/>
      </div>
    );
  }
};

Search.propTypes = {
  name: PropTypes.string,
};

export default Search;
