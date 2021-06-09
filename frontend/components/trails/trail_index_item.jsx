import React from 'react'; 

const TrailIndexItem = ({ trail }) => {
  return(
    <div>
      <div>
        {trail.name} 
        <img src={trail.coverPhotoURL} />
      </div>
    </div>
  )
}

export default TrailIndexItem; 