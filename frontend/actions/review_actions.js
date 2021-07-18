import * as ReviewApiUti from "../util/reviews_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});

export const fetchReviews = trail_id => dispatch => {
  return ReviewApiUti.fetchReviews(trail_id).then(reviews =>
    dispatch(receiveReviews(reviews))
  );
};

export const fetchReview = reviewId => dispatch => {
  return ReviewApiUti.fetchReview(reviewId).then(review =>
    dispatch(receiveReview(review))
  );
};

export const createReview = review => dispatch => {
  return ReviewApiUti.createReview(review).then(review =>
    dispatch(receiveReview(review))
  );
};
