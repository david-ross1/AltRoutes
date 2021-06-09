import React from 'react'; 
import { Link } from 'react-router-dom';

const TrailIndexItem = ({ trail }) => {
  debugger 
  return (
    <Link to={`/trails/${trail.id}`} className='trail-card'> 
    <div>
      <img className='trail-index-item-pic' src={trail.coverPhotoURL} />
    </div>
    <div className='trail-info'>
        
      
    </div>
    
    </Link>
  );
}

export default TrailIndexItem; 



