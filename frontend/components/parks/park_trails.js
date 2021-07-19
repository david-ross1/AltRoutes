import { connect } from 'react-redux';
import { fetchParkTrails } from '../../actions/park_actions';
import { fetchTrail, fetchTrails } from '../../actions/trail_actions';
import TrailsInParkIndex from './park_trail_index';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  trails: state.entities.trails.trail_list,
  parkTrails: state.entities.parks.parkTrails,
  ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
  fetchParkTrails: (trailId) => dispatch(fetchParkTrails(trailId)),
  fetchTrails: () => dispatch(fetchTrails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrailsInParkIndex);
