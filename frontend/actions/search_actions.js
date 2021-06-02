import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results,
});

const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const fetchSearchResuts = (query) => (dispatch) =>
  SearchApiUtil.fetchSearchResults(query).then((results) =>
    dispatch(receiveSearchResults(results))
  );
