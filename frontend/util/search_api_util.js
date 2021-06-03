export const fetchSearchResults = (query) =>
  $.ajax({
    url: `api/searches?query=${query}`,
  });
