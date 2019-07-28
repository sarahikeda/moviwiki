import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
  }

  searchMovie = () => {
    console.log(this.state.searchQuery)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="searchTerm"
          onChange={this.handleChange}
          placeholder="Movie Title"
          type="text"
        />

        <input
          onClick={this.searchMovie}
          type="submit"
          value="Submit"
        />
      </div>
    );
  }
};

export default SearchBar;
