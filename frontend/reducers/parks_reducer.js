import { RECEIVE_PARK, RECEIVE_PARKS } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PARK:
      return Object.assign({}, state, { [action.park.id]: action.park });
    case RECEIVE_PARKS:
      return { ...state, park_list: action.parks };
    default:
      return state;
  }
};

export default parksReducer;
