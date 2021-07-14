import { connect } from 'react-redux';
import { fetchTrailsInPark } from '../../actions/park_actions';
import { fetchTrail, fetchTrails } from '../../actions/trail_actions';
import TrailsInParkIndex from './trails_in_park_index';

const mSTP = (state, ownProps) => ({
  // console.log("OWNPROPS", ownProps);
  trailsInPark: state.entities.parks.trailsInPark,
  parkName: ownProps.parkName,
  trails: state.entities.trails.trail_list,
  ownProps: ownProps,
});

const mDTP = dispatch => ({
  fetchTrailsInPark: trailId => dispatch(fetchTrailsInPark(trailId)),
  fetchTrail: trailId => dispatch(fetchTrail(trailId)),
  fetchTrails: () => dispatch(fetchTrails()),
});

export default connect(mSTP, mDTP)(TrailsInParkIndex);
