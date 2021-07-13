import * as ParkApiUtil from "../util/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARKS = "RECEIVE_PARKS";
export const RECEIVE_TRAILS_IN_PARK = "RECEIVE_TRAILS_IN_PARK"

const receivePark = park => ({
  type: RECEIVE_PARK,
  park,
});

const receiveParks = parks => ({
  type: RECEIVE_PARKS,
  parks,
});

const receiveTrailsInPark = trailsInPark => ({
  type: RECEIVE_TRAILS_IN_PARK,
  trailsInPark,
});

export const fetchPark = parkId => dispatch =>
  ParkApiUtil.fetchPark(parkId).then(park => dispatch(receivePark(park)));

export const fetchParks = () => dispatch =>
  ParkApiUtil.fetchParks().then(parks => dispatch(receiveParks(parks)));

export const fetchTrailsInPark = parkId => dispatch => {
  return ParkApiUtil.fetchTrailsInPark(parkId).then(trailsInPark =>
    dispatch(receiveTrailsInPark(trailsInPark))
  );
};
