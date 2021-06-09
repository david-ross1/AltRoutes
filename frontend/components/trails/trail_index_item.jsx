import React from 'react'; 

const TrailIndexItem = ({ trail }) => {
  debugger 
  return (
    <div>
      <div>
        {trail.name}
        {trail.elevationGain}
        <div>
          <img class='trail-index-item-pic' src={trail.coverPhotoURL} />
        </div>
      </div>
    </div>
  );
}

export default TrailIndexItem; 



