import React from 'react';
import SearchImage from '../../assets/images/search-icon.jpg';
import SearchBar from '../SearchBar/index.js';
import Results from '../Results/index.js';

import './index.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
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
    fetch("http://www.omdbapi.com/?apikey=55662455&t=" + query)
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
          isLoaded={this.state.isLoaded}
          movieResults={this.state.movieResults}
        />
      </div>
    );
  }
};

export default Search;
