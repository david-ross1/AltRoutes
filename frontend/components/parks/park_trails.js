import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";
import { fetchTrail, fetchTrails } from "../../actions/trail_actions";
import TrailsInParkIndex from "./trails_in_park_index";

const mSTP = (state, ownProps) => ({
  parkTrails: state.entities.parks.parkTrails,
  parkName: ownProps.parkName,
  trails: state.entities.trails.trail_list,
  ownProps: ownProps,
});

const mDTP = dispatch => ({
  fetchParkTrails: trailId => dispatch(fetchParkTrails(trailId)),
  fetchTrail: trailId => dispatch(fetchTrail(trailId)),
  fetchTrails: () => dispatch(fetchTrails()),
});

export default connect(mSTP, mDTP)(TrailsInParkIndex);
