import React from "react";
import { Link } from "react-router-dom";

class TrailIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  truncateName(name) {
    return name.length > 29 ? name.slice(0, 29) + "..." : name;
  }

  render() {
    const { trail } = this.props;

    const mainPageIndex = (
      <Link to={`/trails/${trail.id}`} className="trail-card">
        <div className="">
          <div className="test">
            <img className="index-trail-pic" src={trail.coverPhotoURL} />

            <div className="truncated-name">
              {this.truncateName(trail.name)}
              <div className="item-locale">{trail.locale}</div>
              <div className="item-difficulty-rating">
                <div className="diff-contain">
                  <span
                    className={`trail-item-difficulty main-pg ${trail.difficulty}`}
                  >
                    {trail.difficulty}
                  </span>
                  <div className="selected-star trail-show main-pg">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
                <div className="item-distance-div">
                  <p className="item-distance">
                    Length: {trail.distance} mi &nbsp; &nbsp; • &nbsp; &nbsp;
                    {trail.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );

    const showPageIndex = (
      <Link to={`/trails/${trail.id}`} className="main-trail-card">
        <div className="show-card">
          <div className="main-test">
            <img className="index-trail-pic" src={trail.coverPhotoURL} />

            <div className="main-truncated-name">
              {this.truncateName(trail.name)}

              <div className="main-item-locale">{trail.locale}</div>

              <div className="main-item-difficulty-rating">
                <div className="diff-contain">
                  <span className={`trail-item-difficulty ${trail.difficulty}`}>
                    {trail.difficulty}
                  </span>
                  <div className="selected-star trail-show">★ ★ ★ ★ ★</div>
                </div>
                <div className="main-item-distance-div">
                  <p className="main-item-distance">
                    Length: {trail.distance} mi &nbsp; &nbsp; • &nbsp; &nbsp;
                    {trail.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );

    return (
      <div>
        {this.props.ownProps.match.url.startsWith("/trails/")
          ? showPageIndex
          : mainPageIndex}
      </div>
    );
  }
}

export default TrailIndexItem;
