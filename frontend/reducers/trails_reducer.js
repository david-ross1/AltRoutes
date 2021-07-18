import { RECEIVE_TRAIL, RECEIVE_TRAILS } from '../actions/trail_actions';

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRAIL:
      return { ...state, [action.trail.id]: action.trail };
    case RECEIVE_TRAILS:
      return { ...state, trail_list: action.trails };
    default:
      return state;
  }
};

export default trailsReducer;
