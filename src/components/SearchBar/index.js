import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.performSearch(this.state.searchQuery);
  }

  render() {
    return (
      <form
        className="search-bar"
        onSubmit={this.handleSubmit}
      >
        <input
          className="search-query"
          onChange={this.handleChange}
          placeholder="movie title"
          type="text"
          value={this.state.searchQuery}
        />

        <input
          type="submit"
          value="Search"
        />
      </form>
    );
  }
};

SearchBar.propTypes = {
  performSearch: PropTypes.func,
};

export default SearchBar;
