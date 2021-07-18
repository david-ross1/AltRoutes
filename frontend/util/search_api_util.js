export const fetchSearchData = (query) =>
  $.ajax({
    url: `/api/searches?query=${query}`,
  });
