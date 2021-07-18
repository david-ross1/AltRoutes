import React from "react";
import { FaArrowAltCircleRight, FaSearch } from "react-icons/fa";
import SearchResults from "./search_data";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      focus: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.update = this.update.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleSubmit(e) {
    if (this.state.query === "") {
      this.props.clearSearchData();
    } else this.props.fetchSearchData(this.state.query);
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  update() {
    return e => {
      this.setState({ query: e.target.value }, this.handleSubmit);
    };
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <div
          className="search-bar"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        >
          <form onSubmit={this.handleSubmit} className="search-input">
            <div className="fa-search">
              <FaSearch />
            </div>
            <input
              type="text"
              className="placeholder-search"
              placeholder="Search by park or trail name"
              onChange={this.update()}
            />
            <button className="fa-circle-right">
              {<FaArrowAltCircleRight />}
            </button>
          </form>
        </div>
        {this.state.query !== "" ? (
          <SearchResults
            query={this.state.query}
            data={data}
            fetchSearchData={this.props.fetchSearchData}
          />
        ) : null}
      </>
    );
  }
}

export default SearchBar;
