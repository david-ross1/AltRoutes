export const fetchParks = () =>
  $.ajax({
    url: `/api/parks/`,
  });
  
export const fetchPark = parkId =>
  $.ajax({
    url: `/api/parks/${parkId}`,
  });

export const fetchParkTrails = parkId =>
  $.ajax({
    url: `/api/parks/park_trails/${parkId}`,
  });

