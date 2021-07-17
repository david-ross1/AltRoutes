import React from 'react';
import TrailsInParkContainer from './trails_in_park_container';
// import ParkMap from '../maps/park_map';
import SubSearch from '../search/sub_search';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDirections } from "@fortawesome/free-solid-svg-icons";
// import TrailIndexItemContainer from "../trails/trail_index_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faShare,
  faCar,
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
  

    // debugger

    return (
      <div className="trail-page-background">
        <div className="title-box">
          <div className="title-photo-box">
            <img src={this.props.park.backgroundPhotoURL} />
          </div>
          <div className="trail-title-content">
            <h1 className="header-text1">{park.name}</h1>
            {/* <div className="difficulty-rating">
              <span className={`trail-difficulty ${park.difficulty}`}>
                {trail.difficulty}
              </span>
            </div> */}
          </div>
          <div className="trail-actions-wrap">
            <div className="trail-action">
              <a target="_blank" href={`https://www.google.com/maps`}>
                <FontAwesomeIcon icon={faArrowsAlt} />
                <p>Directions</p>
              </a>
            </div>
            <div className="trail-action">
              <a href="javascript:window.print()" target="_blank">
                <FontAwesomeIcon icon={faPrint} />
                <p>Print map</p>
              </a>
            </div>
            <div className="trail-action">
              <a target="_blank" href="https://wwww.facebook.com/">
                <FontAwesomeIcon icon={faShare} />
                <p>Share</p>
              </a>
            </div>
          </div>
        </div>
        <div className="trail-info">
          <div className="trail-left99">
            {/* <div className="trail-left-1">
              <p>{park.description}</p>
            </div>
            <div className="trail-left-2"> */}
            {/* <div className="trail-stat">
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
            </div> */}
            <div className="trail-tab">
              <p>Description</p>
            </div>
            <div className="trail-left-30">
              <div className='park-des'>
                <p>{park.description}</p>
              </div>
              <div className='best-trails-in-park'>
                <p>Best trails in {park.name}</p>
              </div>
              {
                <TrailsInParkContainer
                  parkId={this.props.park.id}
                  parkName={this.props.park.name}
                />
              }
            </div>
            <div className="trail-tab"></div>
            <div className="something">
              <div className="reviews-container">
                <div className="reviews-content">
                  <div className="reviews-header">
                    {/* <p>Reviews</p> */}
                    {this.props.match.url.startsWith("/trails/")
                      ? <p>Reviews</p>
                      : '' }
                  </div>
                  <div className="add-review-container">
                    {/* {<ReviewFormContainer trail_id={this.props.trail.id} />} */}
                  </div>
                  <div className="all-reviews">
                    {/* {<ReviewIndexContainer />} */}
                  </div>
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
            <div className="trail-left-43"></div>
          </div>
          <div className="trail-right43">
            {/* <div className="trail-map"></div> */}
            <div className="nearby-trails-wrapper">
              <h3 className="nearby-trails header-text3"></h3>
              {/* <TrailIndexItemContainer /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ParkShow;


//  return (
//       <div className="park-show-container">
//         <div className="content-container">
//           <div className="sub-nav">
//             <div className="trail-location-container">
//               <p>
//                 United States {">"} {park.name}{" "}
//               </p>
//             </div>
//             <SubSearch />
//           </div>
//           <div className="park-content">
//             <div className="park-pic-container">
//               <img src={this.props.park.backgroundPhotoURL} />
//               <img src={this.props.photo} />
//             </div>
//             <div className="title-rating">
//               <div className="park-title-container">
//                 <p>{park.name}</p>
//               </div>
//               <div className="rating-container">
//                 <p>Rating: </p>
//                 <div className="active-star">★★★★★</div>
//               </div>
//             </div>
//             <div className="park-summary-container">
//               <div className="park-summary">
//                 {this.props.park ? <p>{this.props.park.description}</p> : ""}
//               </div>
//             </div>
//             <div className="park-description-container">
//               <div className="park-description-header">
//                 <p>Description</p>
//               </div>
//               <div className="park-description-body">
//                 {this.props.park ? <p>{this.props.park.description}</p> : ""}
//               </div>

//               {/* <div className="park-map-container">
//                                 {park ? <ParkMap  latitude={park.lat} longitude={park.lng}/> : ""}
//                             </div> */}

//               <div className="other-park-actions">
//                 <div className="park-directions-container">
//                   <a
//                     target="_blank"
//                     href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.lon}`}
//                   >
//                     <FontAwesomeIcon icon={faDirections} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="park-information-container">
//             <div className="park-information-header">
//               <p>Park Information</p>
//             </div>
//             <div className="park-information-details">
//               <div className="park-acreage">
//                 <p>Acreage:</p>
//                 <p>{this.props.park.acreage} acres</p>
//               </div>
//               <div className="park-contact">
//                 <p>Contact:</p>
//                 <p>{park.contact}</p>
//               </div>
//             </div>
//           </div>
//           <div className="trails-in-park-container">
//             <div className="park-information-header">
//               <p>Top Trails</p>
//             </div>
//             <div className="trails-in-park-sub-container">
//               <div className="trail-in-park-details-container">
//                 {
//                   <TrailsInParkContainer
//                     parkId={this.props.park.id}
//                     parkName={this.props.park.name}
//                   />
//                 }
//                 {/* <TrailIndexItemContainer />  */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }