export const fetchPark = (parkId) =>
  $.ajax({
    url: `/api/parks/${parkId}`,
  });

export const fetchParks = () =>
  $.ajax({
    url: `/api/parks/`,
  });
