import * as ParkApiUtil from "../util/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARKS = "RECEIVE_PARKS";
export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS";

const receivePark = park => ({
  type: RECEIVE_PARK,
  park,
});

const receiveParks = parks => ({
  type: RECEIVE_PARKS,
  parks,
});

const receiveParkTrails = parkTrails => ({
  type: RECEIVE_PARK_TRAILS,
  parkTrails,
});

export const fetchPark = parkId => dispatch =>
  ParkApiUtil.fetchPark(parkId).then(park => dispatch(receivePark(park)));

export const fetchParks = () => dispatch =>
  ParkApiUtil.fetchParks().then(parks => dispatch(receiveParks(parks)));

export const fetchParkTrails = parkId => dispatch =>
  ParkApiUtil.fetchParkTrails(parkId).then(parkTrails =>
    dispatch(receiveParkTrails(parkTrails))
  );
