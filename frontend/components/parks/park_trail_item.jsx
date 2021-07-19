import React from 'react';
import { useHistory } from 'react-router';

const ParkTrailItem = (props) => {
  const { trail } = props;
  const history = useHistory();

  const handlePark = (e) => {
    e.preventDefault();

    history.push(`/trails/${trail.id}`);
  };

  const difficultyClass =
    trail.difficulty === 'hard'
      ? 'hard'
      : trail.difficulty === 'moderate'
      ? 'moderate'
      : 'easy';

  return (
    <div onClick={handlePark} className="pk-trails-cont">
      <div className="pk-img-cont">
        <div className="pk-img">
          <img src={props.trail.coverPhotoURL} alt='trail-photo' />
        </div>
      </div>
      <div className="pk-trail-cont">
        <div className="pk-trail-name-cont">
          <div className="pk-trail-name">
            <p>{trail.name}</p>
          </div>
          <div className="trail-pk-name">
            <p>{props.name}</p>
          </div>
        </div>
        <div className="pk-trail-infotainer">
          <div className="pk-trail-difficulty-container">
            <div className={`${'trail-difficulty' + ' '}${difficultyClass}`}>
              {trail.difficulty}
            </div>
            <div className="pk-trail-rating">
              <div className="selected-star parkstar">★ ★ ★ ★ ★</div>
            </div>
          </div>
          <div className="pk-trail-length">
            <p>Length: </p>
            <p>{trail.distance} mi</p>
            <p>{` • ${trail.time}`}</p>
          </div>
        </div>
        <div className="pk-trail-description">
          {trail.description.length > 220
            ? `${trail.description.substring(0, 220)}...`
            : trail.description}
        </div>
      </div>
    </div>
  );
};

export default ParkTrailItem;
