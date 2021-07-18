import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  render() {
    const noData = <li className="res data">No Results Found</li>;

    const searchData = this.props.data.map((data, idx) => (
      <div className="result-container">
        <li className="res data" key={idx}>
          {data.category === 'Trail' ? (
            <Link to={`/trails/${data.id}`}>
              <div className="res-icon-fa">
                <div className="res-fa">
                  <FaMapMarkerAlt />
                </div>
                <div className="res-name">
                  <div className="result-name">{data.name}</div>
                  <div className="locale">{data.locale}</div>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={`/parks/${data.id}`}>
              <div className="res-park-icon-fa">
                <div className="res-park-fa">
                  <FontAwesomeIcon icon={faTree} />
                </div>
                <div className="res-parkname">{data.name}</div>
              </div>
            </Link>
          )}
        </li>
      </div>
    ));

    return (
      <div className="search-tainer">
        <ul className="search-data">
          {this.props.data.length ? searchData : noData}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
