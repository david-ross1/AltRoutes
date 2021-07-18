export const fetchTrails = () =>
  $.ajax({
    url: `/api/trails`,
  });

export const fetchTrail = (trailId) =>
  $.ajax({
    url: `/api/trails/${trailId}`,
  });
