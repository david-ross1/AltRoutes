import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faShare,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import TrailIndexItemContainer from "./trail_index_container";
import TrailMap from "../map/trail_map";

import ReviewIndexContainer from "../reviews/review_index_container";
import ReviewFormContainer from "../reviews/review_form_container";

class TrailShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      trailId: this.props.match.params.trailId,
    };
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.trailId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trailId !== prevProps.match.params.trailId) {
      this.props.fetchTrail(this.props.match.params.trailId);
    }
  }

  render() {
    let { trail } = this.props;
    if (trail === undefined) {
      return null;
    }

    return (
      <div className="trail-bg">
        <div className="trail-bg-container">
          <div className="trail-title-pic-container">
            <img src={trail.coverPhotoURL} alt="trail" />
          </div>
          <div className="trail-title-info">
            <h1>{trail.name}</h1>
            <div className="trail-diff-rating">
              <span className={`trail-difficulty ${trail.difficulty}`}>
                {trail.difficulty}
              </span>
            </div>
          </div>
          <div className="cover-photo-buttons-container">
            <div className="trail-button">
              <a
                target="_blank"
                href={`https://www.google.com/maps/dir/Current+Location/${trail.lat},${trail.lon}`}
              >
                <FontAwesomeIcon icon={faArrowsAlt} />
                <p>Directions</p>
              </a>
            </div>
            <div className="trail-button">
              <a href="javascript:window.print();">
                <FontAwesomeIcon icon={faPrint} />
                <p>Print map</p>
              </a>
            </div>
            <div className="trail-button">
              <a target="_blank" href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faShare} />
                <p>Share</p>
              </a>
            </div>
          </div>
        </div>
        <div className="trail-info">
          <div className="trail-side">
            <div className="trail-side-1">
              <p>{trail.parkDescription}</p>
            </div>
            <div className="trail-side-2">
              <div className="trail-statistics">
                <p>Length</p>
                <span>{trail.distance} mi</span>
              </div>
              <div className="trail-statistics">
                <p>Elevation gain</p>
                <span>{trail.elevationGain} ft</span>
              </div>
              <div className="trail-statistics">
                <p>Route type</p>
                <span>{trail.routeType}</span>
              </div>
            </div>
            <div className="trail-statistic-sub">
              <p>Description</p>
            </div>
            <div className="trail-side-3">
              <div>
                <p>{trail.description}</p>
              </div>
            </div>
            <div className="trail-statistic-sub"></div>

            <div>
              <div className="header-review">
                <p>Reviews</p>
              </div>
              <div>
                <ReviewFormContainer trail_id={this.props.trail.id} />
              </div>
              <div className="reviews-main">{<ReviewIndexContainer />}</div>
            </div>

            <div className="trail-side-4"></div>
          </div>
          <div className="trail-right4">
            <div className="map-box">
              <TrailMap lon={trail.lon} lat={trail.lat} />
            </div>
            <div className="nearby-trails-wrapper">
              <h3 className="nearby-trails header-text3"></h3>
              <TrailIndexItemContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailShow;
