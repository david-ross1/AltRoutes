import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import ReviewIndex from './review_index';
import { withRouter } from 'react-router-dom';
import { deleteReview } from "../../util/reviews_api_util";

const mapStateToProps = (state, ownProps) => {

    return ({
        reviews: state.entities.reviews.reviews,

    })
};

const mapDispatchToProps = dispatch => ({
    fetchReviews: (trail_id) => dispatch(fetchReviews(trail_id)),
    deleteReview: (review_id) => dispatch(deleteReview(review_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));