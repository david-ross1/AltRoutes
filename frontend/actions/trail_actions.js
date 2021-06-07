import * as TrailAPIUtil from "../util/trail_api_util";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";
export const RECEIVE_TRAILS = "RECEIVE_TRAILS";

const receiveTrail = (trail) => ({
  type: RECEIVE_TRAIL,
  trail,
});

const receiveTrails = (trails) => ({
  type: RECEIVE_TRAILS,
  trails,
});

export const fetchTrails = () => dispatch =>
  TrailAPIUtil.fetchTrails().then((trails) => dispatch(receiveTrails(trails)));

export const fetchTrail = (trailId) => dispatch =>
  TrailAPIUtil.fetchTrail(trailId).then((trail) =>
    dispatch(receiveTrail(trail))
  );
