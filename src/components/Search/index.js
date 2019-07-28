import React from 'react';
import PropTypes from 'prop-types';
import SearchImage from '../../assets/images/search-icon.jpg';
import SearchBar from '../SearchBar/index.js';

import './index.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
  }

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    return (
      <div>
        {isToggleOn ?
          <SearchBar />
          : (
            <img
              alt="magnifying-glass"
              className="search-icon"
              onClick={this.handleClick}
              src={SearchImage}
            />
          )
        }
      </div>
    );
  }
};

Search.propTypes = {
  name: PropTypes.string,
};

export default Search;
