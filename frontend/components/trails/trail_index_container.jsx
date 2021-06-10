import { connect } from "react-redux";
import TrailIndex from "./trail_index";
import { fetchTrails } from "../../actions/trail_actions";
import { fetchParks } from "../../actions/park_actions"
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
  trails: state.entities.trails.trail_list,
  parks: Object.values(state.entities.parks),
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrails: () => dispatch(fetchTrails()),
  fetchParks: () => dispatch(fetchParks()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrailIndex));