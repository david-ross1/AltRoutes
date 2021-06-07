export const fetchTrail = (trailId) =>
  $.ajax({
    url: `/api/trails/${trailId}`,
  });

export const fetchTrails = () =>
  $.ajax({
    url: "/api/trails",
  });
