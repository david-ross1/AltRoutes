export const fetchSearchData = query => {
  return $.ajax({
    method: "GET",
    url: `/api/searches?query=${query}`,
  });
};
