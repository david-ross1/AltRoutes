import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, [action.currentUser.id]: action.currentUser };
    case RECEIVE_USERS:
      const newState = { ...state };
      action.users.forEach((user) => (newState[user.id] = user));
    default:
      return state;
  }
};

export default usersReducer;
