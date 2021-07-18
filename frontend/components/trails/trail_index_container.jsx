import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrailIndex from './trail_index';
import { fetchTrails } from '../../actions/trail_actions';
import { fetchParks } from '../../actions/park_actions';

const mapStateToProps = (state, ownProps) => ({
  trails: state.entities.trails.trail_list,
  parks: Object.values(state.entities.parks),
  ownProps,

  trail: state.entities.trails[ownProps.match.params.trailId],
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrails: () => dispatch(fetchTrails()),
  fetchParks: () => dispatch(fetchParks()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrailIndex)
);
