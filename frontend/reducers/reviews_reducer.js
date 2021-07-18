import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, reviews: action.reviews };
    case RECEIVE_REVIEW:
      return { ...state, reviews: [...state.reviews, action.review] };
    default:
      return state;
  }
};

export default ReviewsReducer;
