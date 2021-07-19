import * as ReviewApiUti from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const fetchReviews = (trailId) => (dispatch) =>
  ReviewApiUti.fetchReviews(trailId).then((reviews) =>
    dispatch(receiveReviews(reviews))
  );

export const fetchReview = (reviewId) => (dispatch) =>
  ReviewApiUti.fetchReview(reviewId).then((review) =>
    dispatch(receiveReview(review))
  );

export const createReview = (review) => (dispatch) =>
  ReviewApiUti.createReview(review).then((nReview) =>
    dispatch(receiveReview(nReview))
  );
