import React from "react";
import TrailIndexItem from './trail_index_item' 


class TrailIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
     this.props.fetchTrails();
     this.props.fetchParks()
  }

  // componentDidUpdate(prevProps) {
  //   // if (this.props.match.params.trailId !== prevProps.match.params.trailId) {
  //     this.props.fetchTrails()
  //   // }
  // }

  render() {
    let { trails, parks } = this.props;

    if (trails === undefined) return null;
    if (parks === undefined) return null; 


    // debugger
      const mainIndex = (
        <div>
          <div className="outer-trailtainer">
            <div className="index-trailtainer">
              <div className="trail-icc">
                {trails.map((trail) => (
                  <TrailIndexItem
                    key={trail.id}
                    pic={trail.coverPhotoURL}
                    trail={trail}
                    park={this.props.parks.filter(
                      (park) => park.id === trail.park_id
                    )}
                    // park={this.props.parks[trail.parkId]}
                    ownProps={this.props.ownProps}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="outer-trailtainer">
            <div className="index-trailtainer">
              <div className="trail-icc">
                {trails.reverse().map((trail) => (
                  <TrailIndexItem
                    key={trail.id}
                    pic={trail.coverPhotoURL}
                    trail={trail}
                    // park={this.props.parks[trail.id]}
                    // park={this.props.parks[trail.park_id]}
                    park={this.props.parks.filter(
                      (park) => park.id === trail.park_id
                    )}
                    ownProps={this.props.ownProps}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );

      const showIndex = (
        <div className='align-right-trailtainer'> 
          <div className="show-outer-trailtainer">
            <div className="show-index-trailtainer">
              <div className="show-trail-icc">
                {trails.map((trail) => (
                  <TrailIndexItem
                    key={trail.id}
                    pic={trail.coverPhotoURL}
                    trail={trail}
                    // park={this.props.parks[trail.id]}
                    // park={this.props.parks[trail.park_id]}
                    park={this.props.parks.filter(
                      (park) => park.id === trail.park_id
                    )}
                    ownProps={this.props.ownProps}
                  />
                ))}
              </div>
            </div>
          </div> 
        </div>
      )

    return (
      <div>
        {this.props.match.url.startsWith('/trails/') ? showIndex : mainIndex }
      </div>
    );
  }
}

export default TrailIndex;
