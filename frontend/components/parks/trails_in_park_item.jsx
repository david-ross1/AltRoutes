import React from 'react';
import { useHistory } from 'react-router';


const TrailsInParkItem = (props) => {

    const { trail } = props;
    const history = useHistory();
    
    const cardClickHandle = (e) => {
        e.preventDefault();

        history.push(`/trails/${trail.id}`);
    }
    // console.log("yo from trailsItem", props);

    const difficultyClass = trail.difficulty === 'hard' ? 'hard' : trail.difficulty === 'moderate' ? 'moderate' : 'easy'



    // debugger; 
    return (
      <div onClick={cardClickHandle} className="trails-in-park-sub-container">
        <div className="trail-in-park-img-container">
          <div className="trail-in-park-img">
            <img src={props.trail.coverPhotoURL} />
            {/* <img src={} /> */}
            {/* <img src={props.park.photo} /> */}
          </div>
        </div>
        <div className="trail-in-park-card-container">
          <div className="trail-in-trailName-parkName">
            <div className="trail-in-park-name">
              <p>{trail.name}</p>
            </div>
            <div className="trail-in-park-park-name">
              <p>{props.parkName}</p>
            </div>
          </div>
          <div className="trail-in-park-indepth-details-cont">
            <div className="trail-in-park-diff-rating-cont">
              <div className={"trail-difficulty" + " " + difficultyClass}>
                {trail.difficulty}
              </div>
              <div className="trail-in-park-rating">
                <div className="active-star parkstar">★ ★ ★ ★ ★</div>
              </div>
            </div>
            <div className="trail-in-park-length-container">
              <p>Length: </p>
              <p>{trail.distance} mi</p>
              <p>{` • ${trail.time}`}</p>
            </div>
          </div>
          <div className="trail-in-park-desc-container">
            {trail.description.length > 220
              ? trail.description.slice(0, 220) + "..."
              : trail.description}
          </div>
        </div>
      </div>
    );
}

export default TrailsInParkItem;
 