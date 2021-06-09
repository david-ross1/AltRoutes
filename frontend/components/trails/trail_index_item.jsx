import React from "react";
import { Link } from "react-router-dom";

// const TrailIndexItem = ({ trail }) => {
//   debugger
//   return (
//     <Link to={`/trails/${trail.id}`} className='trail-card'>
//       <div className='trail-pic-container'>
//          <img className='trail-index-item-pic' src={trail.coverPhotoURL} />
//        </div>
//        <div>
//          {trail.name}</div>
//        <div className='trail-info'>
//         <div>{trail.length}</div>
//        </div>

//     </Link>
//   );
// }

// export default TrailIndexItem;

class TrailIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  
  truncateName(name) {
    if (name.length > 30) {
      return name.slice(0, 30) + '...' 
    } else {
      return name;
    }
  }

  render() {
    const { trail } = this.props 
    return (
      <Link to={`/trails/${trail.id}`} className="trail-card">
        <div className="">
          <div className='test'>
            <img className="index-trail-pic" src={trail.coverPhotoURL} />

            <div className="truncated-name">
              {this.truncateName(trail.name)}
            </div>
            <div className="trail-info">
              <div>{trail.length}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default TrailIndexItem; 