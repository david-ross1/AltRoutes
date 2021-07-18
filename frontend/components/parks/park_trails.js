import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";
import { fetchTrail, fetchTrails } from "../../actions/trail_actions";
import ParkTrailsIndex from "./park_index";

const mSTP = (state, ownProps) => ({
  parkName: ownProps.parkName,
  trails: state.entities.trails.trail_list,
  parkTrails: state.entities.parks.parkTrails,
  ownProps: ownProps,
});

const mDTP = dispatch => ({
  fetchTrail: trailId => dispatch(fetchTrail(trailId)),
  fetchParkTrails: trailId => dispatch(fetchParkTrails(trailId)),
  fetchTrails: () => dispatch(fetchTrails()),
});

export default connect(mSTP, mDTP)(ParkTrailsIndex);
