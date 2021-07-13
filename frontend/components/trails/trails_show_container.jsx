import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import TrailShow from "./trail_show";
import { withRouter } from "react-router-dom";
import { fetchTrails } from "../../actions/trail_actions";

import { fetchReviews } from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => ({
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
  fetchTrails: () => dispatch(fetchTrails()),
  fetchReviews: trailId => dispatch(fetchReviews(trailId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrailShow)
);






