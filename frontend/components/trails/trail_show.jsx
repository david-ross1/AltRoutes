import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faShare,
  faCar,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import NearbyTrailsContainer from '../trails/nearby_trails_container'



class TrailShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
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


    // this.setState({ num: num + 1})

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
              <a
                target="_blank"
                href="#"
              >
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
            <div className="trail-tab">
            </div>
            <div className="trail-left-4">
            </div>
          </div>
          <div className="trail-right">
            <div className="trail-map">
            </div>
            <div className="nearby-trails-wrapper">
              <h3 className="nearby-trails header-text3">Nearby Trails</h3>
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
