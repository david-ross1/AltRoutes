import React from 'react';
import TrailsInParkItem from './trails_in_park_item';

class TrailsInParkIndex extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Yo from TrailsInParkIndex", this.props);
    }
    componentDidMount() {
        this.props.fetchTrailsInPark(this.props.parkId);
    }

    render() {
        const { parkTrails, parkName } = this.props;
        if (!parkTrails) {
            return null;
        }

        return (
            <div>
                {
                    parkTrails.map(trail => (
                        <TrailsInParkItem
                            key={trail.id}
                            trail={trail}
                            parkName={parkName}
                            photo={trail.coverPhotoURL}
                        />
                    ))
                }
            </div>
        )
    }
}


export default TrailsInParkIndex;