import React from 'react';
import PropTypes from 'prop-types';
import SearchImage from '../../assets/images/search-icon.jpg';
import SearchBar from '../SearchBar/index.js';
import Results from '../Results/index.js';

import './index.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isToggleOn: false,
      movieResults: [],
    };
  }

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  performSearch = (query) => {
    console.log(query, 'query')
    fetch("http://www.omdbapi.com/?apikey=55662455&t=" + query)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Response === 'True') {
            this.setState({
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


  render() {
    const isToggleOn = this.state.isToggleOn;
    return (
      <div>
        {isToggleOn ?
          <SearchBar performSearch={this.performSearch} />
          : (
            <img
              alt="magnifying-glass"
              className="search-icon"
              onClick={this.handleClick}
              src={SearchImage}
            />
          )
        }

        <Results
          error={this.state.error}
          movieResults={this.state.movieResults}
        />
      </div>
    );
  }
};

Search.propTypes = {
  name: PropTypes.string,
};

export default Search;
