import { connect } from "react-redux";
import TrailIndex from "./trail_index";
import { fetchTrails } from "../../actions/trail_actions";
import { fetchParks } from "../../actions/park_actions"

const mapStateToProps = (state) => ({
  trails: state.entities.trails.trail_list,
  parks: state.entities.parks.park_list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrails: () => dispatch(fetchTrails()),
  fetchParks: () => dispatch(fetchParks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrailIndex);
