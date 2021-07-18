import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";
import ParkShow from "./parks_show";
import { fetchTrail, fetchTrails } from "../../actions/trail_actions";

const mapStateToProps = (state, ownProps) => ({
  park: state.entities.parks[ownProps.match.params.parkId],
});

const mapDispatchToProps = dispatch => ({
  fetchPark: parkId => dispatch(fetchPark(parkId)),
  fetchTrail: trailId => dispatch(fetchTrail(trailId)),
  fetchTrails: () => dispatch(fetchTrails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkShow);
