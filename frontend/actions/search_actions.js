import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_DATA = "RECEIVE_SEARCH_DATA";
export const CLEAR_SEARCH_DATA = "CLEAR_SEARCH_DATA";

const receiveSearchData = results => ({
  type: RECEIVE_SEARCH_DATA,
  results,
});

export const clearSearchData = () => ({
  type: CLEAR_SEARCH_DATA,
});

export const fetchSearchData = query => dispatch => {
  return SearchApiUtil.fetchSearchData(query).then(results =>
    dispatch(receiveSearchData(results))
  );
};
