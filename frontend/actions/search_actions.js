import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_DATA = 'RECEIVE_SEARCH_DATA';
export const CLEAR_SEARCH_DATA = 'CLEAR_SEARCH_DATA';

const receiveSearchData = (data) => ({
  type: RECEIVE_SEARCH_DATA,
  data,
});

export const clearSearchData = () => ({
  type: CLEAR_SEARCH_DATA,
});

export const fetchSearchData = (query) => (dispatch) =>
  SearchApiUtil.fetchSearchData(query).then((data) =>
    dispatch(receiveSearchData(data))
  );
