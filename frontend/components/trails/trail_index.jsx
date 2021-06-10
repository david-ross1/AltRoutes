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


    


    return (
      <div>
        <div className="outer-trailtainer">
          <div className="index-trailtainer">
            <div className="trail-icc">
              {trails.map((trail) => (
                <TrailIndexItem
                  key={trail.id}
                  pic={trail.coverPhotoUrl}
                  trail={trail}
                  park={this.props.parks[trail.id]}
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
                  pic={trail.coverPhotoUrl}
                  trail={trail}
                  park={this.props.parks[trail.id]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailIndex;
