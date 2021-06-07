import { combineReducers } from "redux";
import users from "./users_reducer";
import trails from './trails_reducer'; 

export default combineReducers({
  users,
  trails
});
