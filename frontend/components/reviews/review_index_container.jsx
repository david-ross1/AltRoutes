import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => ({
  reviews: state.entities.reviews.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (trailId) => dispatch(fetchReviews(trailId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)
);
