export const fetchSearch = (query) =>
  $.ajax({
    url: `api/searches?query=${query}`,
  });
