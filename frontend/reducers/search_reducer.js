import {
  RECEIVE_SEARCH_DATA,
  CLEAR_SEARCH_DATA,
} from "../actions/search_actions";

const searchReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_DATA:
      return action.results;
    case CLEAR_SEARCH_DATA:
      return [];
    default:
      return state;
  }
};

export default searchReducer;
