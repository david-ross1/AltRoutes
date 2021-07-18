export const fetchTrails = () =>
  $.ajax({
    url: `/api/trails`,
  });

export const fetchTrail = trailId => {
  return $.ajax({
    url: `/api/trails/${trailId}`,
  });
};
