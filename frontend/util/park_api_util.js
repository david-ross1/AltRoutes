export const fetchPark = parkId =>
  $.ajax({
    url: `/api/parks/${parkId}`,
  });

export const fetchTrailsInPark = parkId =>
  $.ajax({
    url: `/api/parks/trails_in_park/${parkId}`,
  });

export const fetchParks = () =>
  $.ajax({
    url: `/api/parks/`,
  });
