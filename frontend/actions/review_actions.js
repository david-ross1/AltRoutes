import * as ReviewApiUti from "../util/reviews_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId,
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

export const updateReview = review => dispatch => {
  return ReviewApiUti.updateReview(review).then(review =>
    dispatch(receiveReview(review))
  );
};

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUti.deleteReview(reviewId).then(reviewId =>
    dispatch(removeReview(reviewId))
  );
};
