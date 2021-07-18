import React from "react";
import { FaArrowAltCircleRight, FaSearch } from "react-icons/fa";
import SearchResults from "./search_results";

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
      this.props.clearSearchData();
    } else this.props.fetchSearchData(this.state.query);
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <div
          className="search-bar"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <form onSubmit={this.handleSubmit} className="search-input">
            <div className="fa-search">
              <FaSearch />
            </div>
            <input
              type="text"
              className="search-box-placeholder"
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
            data={data}
            query={this.state.query}
            fetchSearchData={this.props.fetchSearchData}
          />
        ) : null}
      </>
    );
  }
}

export default SearchBar;
