import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMapMarkerAlt } from "react-icons/fa";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
  render() {
    const noData = (
      <li className={`${parent}search-result-item`}>No Results Found</li>
    );

    const searchData = this.props.data.map((result, idx) => (
      <div className="result-container">
        <li className={`${parent}search-result-item`} key={idx}>
          {result.category === "Trail" ? (
            <Link to={`/trails/${result.id}`}>
              <div className="result-trail-icon">
                <div className="res-icon-trail">
                  <FaMapMarkerAlt />
                </div>
                <div className="res-name">
                  <div className="result-name">{result.name}</div>
                  <div className="locale">{result.locale}</div>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={`/parks/${result.id}`}>
              <div className="result-park-icon">
                <div className="res-icon-park">
                  <FontAwesomeIcon icon={faTree} />
                </div>
                <div className="res-name-park">{result.name}</div>
              </div>
            </Link>
          )}
        </li>
      </div>
    ));

    return (
      <div className="search-res-container">
        <ul className={`${parent}search-data`}>
          {this.props.data.length ? searchData : noData}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
