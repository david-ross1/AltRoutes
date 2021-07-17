import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faShare,
  faCar,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import TrailIndexItemContainer from './trail_index_container';
import TrailMap from '../map/trail_map'; 

import ReviewIndexContainer from '../reviews/review_index_container';
// import ReviewFormContainer from '../reviews/review_form_container';
import subnav_container from "../nav/subnav_container";
import ReviewFormContainer from '../reviews/review_form_container'


class TrailShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      num: 0,
      trailId: this.props.match.params.trailId
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
   
    const { trails } = this.props;
    // const localTrails = trails.filter((trail) => trail.park_id === this.props.match.params)
    const renderReview = (this.props.currentUser ? (
      <ReviewIndexContainer />
    ) : '')

    // this.setState({ num: num + 1})

  //  debugger

    return (
      <div className="trail-page-background">
        <div className="title-box">
          <div className="title-photo-box">
            <img src={trail.coverPhotoURL} alt="trail" />
          </div>
          <div className="trail-title-content">
            <h1 className="header-text1">{trail.name}</h1>
            <div className="difficulty-rating">
              <span className={`trail-difficulty ${trail.difficulty}`}>
                {trail.difficulty}
              </span>
            </div>
          </div>
          <div className="trail-actions-wrap">
            <div className="trail-action">
              <a
                target="_blank"
                href={`https://www.google.com/maps/dir/Current+Location/${trail.lat},${trail.lon}`}
              >
                <FontAwesomeIcon icon={faArrowsAlt} />
                <p>Directions</p>
              </a>
            </div>
            <div className="trail-action">
              <a href="javascript:window.print();">
                <FontAwesomeIcon icon={faPrint} />
                <p>Print map</p>
              </a>
            </div>
            <div className="trail-action">
              <a target="_blank" href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faShare} />
                <p>Share</p>
              </a>
            </div>
          </div>
        </div>
        <div className="trail-info">
          <div className="trail-left">
            <div className="trail-left-1">
              <p>{trail.parkDescription}</p>
            </div>
            <div className="trail-left-2">
              <div className="trail-stat">
                <p>Length</p>
                <span className="header-text-3">{trail.distance} mi</span>
              </div>
              <div className="trail-stat">
                <p>Elevation gain</p>
                <span className="header-text-3">{trail.elevationGain} ft</span>
              </div>
              <div className="trail-stat">
                <p>Route type</p>
                <span className="header-text-3">{trail.routeType}</span>
              </div>
            </div>
            <div className="trail-tab">
              <p>Description</p>
            </div>
            <div className="trail-left-3">
              <div>
                <p>{trail.description}</p>
              </div>
            </div>
            <div className="trail-tab"></div>
            <div className="something">
              <div className="reviews-container">
                <div className="reviews-content">
                  <div className="reviews-header">
                    <p>Reviews</p>
                  </div>
                  <div className="add-review-container">
                    <ReviewFormContainer trail_id={this.props.trail.id} />
                  </div>
                  <div className="all-reviews">{<ReviewIndexContainer />}</div>
                </div>
              </div>
              <div className="nearby-trails-container">
                <div className="nearby-trails-sub-container">
                  <div className="nearby-trails-header">
                    {/* <p>Nearby Trails</p> */}
                  </div>
                  <div className="nearby-trails-info">
                    {/* <NearbyTrailsContainer trailId={this.props.trail.id} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="trail-left-4"></div>
          </div>
          <div className="trail-right4">
            <div className='map-box'>
              <TrailMap lon={trail.lon} lat={trail.lat} /> 
            </div>
            {/* <div className="trail-map"></div> */}
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

































// <div>
//   <p>Description:-------------------{trail.description}</p>
//   <p>distance:--------------------- {trail.distance}</p>
//   <p>elevation_gain:--------------- {trail.elevationGain}</p>
//   <p>difficulty:------------------- {trail.difficulty}</p>
//   <p>park_id: ----------------------{trail.parkId}</p>
//   <p>route_type:------------------- {trail.routeType}</p>
//   <p>lat:-------------------------- {trail.lat}</p>
//   <p>lon:-------------------------- {trail.lon}</p>

//   <div className="trail-photo"   />
//   <img src={trail.coverPhotoURL} />

//   <div className="background">
//     <div className="trail-name">
//       <div className="trail-pictainer">
//         <img className="trail-pic"></img>
//       </div>

//       <div className="trail-title-content">
//         <h1>{trail.name}</h1>
//         <div className="difficulty">
//           <span>{trail.difficulty}</span>
//         </div>
//       </div>
//     </div>
//   </div>
//   <NavLink to="/trails/9" exact>
//     Trail 9
//   </NavLink>

//   <button onClick={() => this.props.history.push("/trails/4")}>
//     test link
//   </button>
// </div>
