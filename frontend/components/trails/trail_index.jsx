import React from "react";
import TrailIndexItem from './trail_index_item' 


class TrailIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.fetchTrails();
  }

  // componentDidUpdate(prevProps) {
  //   // if (this.props.match.params.trailId !== prevProps.match.params.trailId) {
  //     this.props.fetchTrails()
  //   // }
  // }

  render() {
    let { trails } = this.props;

    if (trails === undefined) return null;

    // debugger
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
