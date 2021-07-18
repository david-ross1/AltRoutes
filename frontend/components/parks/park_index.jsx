import React from "react";
import ParkTrailItem from "./park_item";

class ParkTrailsIndex extends React.Component {
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
          <ParkTrailItem
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

export default ParkTrailsIndex;
