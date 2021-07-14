import React from 'react';
// import { FontAwesomIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { FaSearch } from 'react-icons/fa'
import SearchResults from './search_results'; 

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      focus: false,
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  update() {
    return e => {
      this.setState({ query: e.target.value }, this.handleSubmit);
    };
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  handleSubmit(e) {
    if (this.state.query === "") {
      this.props.clearSearchResults();
    } else this.props.fetchSearchResults(this.state.query);
  }

  render() {
    const { results } = this.props;

    return (
      <>
        <div
          className="search-bar"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <form onSubmit={this.handleSubmit} className="search-input">
            <FaSearch />

            <input
              type="text"
              placeholder="Enter a trail or park name"
              onChange={this.update()}
            />
            <button>Search</button>
          </form>
        </div>
        {this.state.query !== "" ? (
          <SearchResults
            results={results}
            query={this.state.query}
            fetchSearchResults={this.props.fetchSearchResults}
          />
        ) : null}
      </>
    );
  }
}

export default SearchBar; 