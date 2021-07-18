import React from "react";
import ParkTrails from "./park_trails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faShare,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

class ParkShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.parkId);
    this.props.fetchTrails();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.parkId !== prevProps.match.params.parkId) {
      this.props.fetchPark(this.props.match.params.parkId);
    }
  }

  render() {
    const { park } = this.props;
    if (!park) {
      return null;
    }

    return (
      <div className="trail-bg">
        <div className="trail-bg-container">
          <div className="trail-title-pic-container">
            <img src={this.props.park.backgroundPhotoURL} />
          </div>
          <div className="trail-title-info">
            <h1>{park.name}</h1>
          </div>
          <div className="cover-photo-buttons-container">
            <div className="trail-button">
              <a target="_blank" href={`https://www.google.com/maps`}>
                <FontAwesomeIcon icon={faArrowsAlt} />
                <p>Directions</p>
              </a>
            </div>
            <div className="trail-button">
              <a href="javascript:window.print()" target="_blank">
                <FontAwesomeIcon icon={faPrint} />
                <p>Print map</p>
              </a>
            </div>
            <div className="trail-button">
              <a target="_blank" href="https://wwww.facebook.com/">
                <FontAwesomeIcon icon={faShare} />
                <p>Share</p>
              </a>
            </div>
          </div>
        </div>
        <div className="trail-info">
          <div className="trail-left99">
            <div className="trail-statistic-sub">
              <p>Description</p>
            </div>
            <div className="trail-side-30">
              <div className="park-des">
                <p>{park.description}</p>
              </div>
              <div className="best-trails-in-park">
                <p>Best trails in {park.name}</p>
              </div>
              {
                <ParkTrails
                  parkId={this.props.park.id}
                  parkName={this.props.park.name}
                />
              }
            </div>
            <div className="trail-statistic-sub"></div>
            <div className="something">
              <div className="reviews-container">
                <div className="reviews-content">
                  <div className="header-review">
                    {this.props.match.url.startsWith("/trails/") ? (
                      <p>Reviews</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="add-review-container"></div>
                  <div className="reviews-main"></div>
                </div>
              </div>
              <div className="local-trails-container">
                <div className="local-trails-sub-container">
                  <div className="local-trails-header"></div>
                  <div className="local-trails-info"></div>
                </div>
              </div>
            </div>
            <div className="trail-side-43"></div>
          </div>
          <div className="trail-right43">
            <div className="local-trails-container">
              <h3 className="local-trails header-text3"></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParkShow;
