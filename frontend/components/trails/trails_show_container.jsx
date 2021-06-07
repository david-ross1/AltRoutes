import { connect } from "react-redux";
import { fetchTrail } from '../../actions/trail_actions'
import TrailShow from "./trail_show";

const mapStateToProps = (state, ownProps) => ({
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow) 