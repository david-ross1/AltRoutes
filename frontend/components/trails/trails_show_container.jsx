import { connect } from "react-redux";
import { fetchTrail } from '../../actions/trail_actions'
import TrailShow from "./trail_show";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentUser: state.entities.users[state.session.id],
  history: ownProps.history
});


const mapDispatchToProps = (dispatch) => ({
  fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrailShow)) 
