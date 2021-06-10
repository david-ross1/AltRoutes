import React from "react";
import { Link, matchPath } from "react-router-dom";
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
    return name.length > 29 ? name.slice(0, 29) + "..." : name;
    }
  

  // componentDidMount() {
  //   this.props.fetchParks()
  // }

  render() {
    const { trail, park } = this.props;
    // const { match: { url }} = this.props
    // debugger;

  

    const mainPageIndex = (
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

        const showPageIndex = (
          <Link to={`/trails/${trail.id}`} className="main-trail-card">
            <div className="show-card">
              <div className="main-test">
                <img className="index-trail-pic" src={trail.coverPhotoURL} />

                <div className="main-truncated-name">
                  {this.truncateName(trail.name)}

                  <div className="main-item-locale">{trail.locale}</div>

                  <div className="main-item-difficulty-rating">
                    <span
                      className={`trail-item-difficulty ${trail.difficulty}`}
                    >
                      {trail.difficulty}
                    </span>
                    <div className="main-item-distance-div">
                      <p className="main-item-distance">
                        Length: {trail.distance} mi &nbsp; &nbsp; • &nbsp;
                        &nbsp;
                        {trail.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
  


    return (
      <div>
         { this.props.ownProps.match.url.startsWith('/trails/') ? showPageIndex : mainPageIndex }
      </div>
      // <Link to={`/trails/${trail.id}`} className="trail-card">
      //   <div className="">
      //     <div className="test">
      //       <img className="index-trail-pic" src={trail.coverPhotoURL} />

      //       <div className="truncated-name">
      //         {this.truncateName(trail.name)}

      //         <div className="item-locale">{trail.locale}</div>

      //         <div className="item-difficulty-rating">
      //           <span className={`trail-item-difficulty ${trail.difficulty}`}>
      //             {trail.difficulty}
      //           </span>
      //           <div className="item-distance-div">
      //             <p className="item-distance">
      //               Length: {trail.distance} mi &nbsp; &nbsp; • &nbsp; &nbsp;
      //               {trail.time}
      //             </p>
      //           </div>
      //         </div>
      //     </div>
      //       </div>
      //   </div>
      // </Link>

    );
  }
}

export default TrailIndexItem;
