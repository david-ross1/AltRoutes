import * as ParkApiUtil from "../util/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARKS = "RECEIVE_PARKS";

const receivePark = (park) => ({
  type: RECEIVE_PARK,
  park,
});

const receiveParks = (parks) => ({
  type: RECEIVE_PARKS,
  parks,
});

export const fetchPark = (parkId) => (dispatch) =>
  ParkApiUtil.fetchPark(parkId).then((park) => dispatch(receivePark(park)));

export const fetchParks = () => (dispatch) =>
  ParkApiUtil.fetchParks().then((parks) => dispatch(receiveParks(parks)));
