import { combineReducers } from "redux";
import users from "./users_reducer";
import trails from "./trails_reducer";
import parks from "./parks_reducer";
import reviews from "./reviews_reducer";
import search from "./search_reducer";

export default combineReducers({
  users,
  trails,
  parks,
  search,
  reviews,
});
