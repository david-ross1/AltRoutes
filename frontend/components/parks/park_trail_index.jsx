import React from "react";
import ParkTrailItem from "./park_trail_item";

class ParkTrailsIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchParkTrails(this.props.parkId);
  }

  render() {
    const { parkTrails, name } = this.props;
    if (!parkTrails) {
      return null;
    }

    return (
      <div>
        {parkTrails.map(trail => (
          <ParkTrailItem
            key={trail.id}
            trail={trail}
            name={name}
            photo={trail.coverPhotoURL}
          />
        ))}
      </div>
    );
  }
}

export default ParkTrailsIndex;
