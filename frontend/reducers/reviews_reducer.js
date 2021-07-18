import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_actions";

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, reviews: action.reviews };
    case RECEIVE_REVIEW:
      return { ...state, reviews: [...state.reviews, action.review] };
    case REMOVE_REVIEW:
      let newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
