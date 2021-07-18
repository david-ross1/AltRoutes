import React from "react";
import TrailsInParkItem from "./park_trails_item";

class TrailsInParkIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchParkTrails(this.props.parkId);
  }

  render() {
    const { parkTrails, parkName } = this.props;
    if (!parkTrails) {
      return null;
    }

    return (
      <div>
        {parkTrails.map(trail => (
          <TrailsInParkItem
            key={trail.id}
            trail={trail}
            parkName={parkName}
            photo={trail.coverPhotoURL}
          />
        ))}
      </div>
    );
  }
}

export default TrailsInParkIndex;
