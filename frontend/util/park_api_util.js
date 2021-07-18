export const fetchPark = parkId =>
  $.ajax({
    url: `/api/parks/${parkId}`,
  });

export const fetchTrailsInPark = parkId =>
  $.ajax({
    url: `/api/parks/park_trails/${parkId}`,
  });

export const fetchParks = () =>
  $.ajax({
    url: `/api/parks/`,
  });
