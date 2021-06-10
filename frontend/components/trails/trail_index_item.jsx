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
    if (name.length > 29) {
      return name.slice(0, 29) + "...";
    } else {
      return name;
    }
  }

  componentDidMount() {}

  render() {
    const { trail, park } = this.props;
    debugger;

    return (
      <Link to={`/trails/${trail.id}`} className="trail-card">
        <div className="">
          <div className="test">
            <img className="index-trail-pic" src={trail.coverPhotoURL} />

            <div className="truncated-name">
              {this.truncateName(trail.name)}

              <div className="item-locale">{trail.locale}</div>

              <div className="item-difficulty-rating">
                <span className={`trail-item-difficulty ${trail.difficulty}`}>
                  {trail.difficulty}
                </span>
                <div className="item-distance-div">
                  <p className="item-distance">
                    Length: {trail.distance} mi &nbsp; &nbsp; • &nbsp; &nbsp;
                    {trail.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default TrailIndexItem;
