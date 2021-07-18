export const fetchSearchData = query => {
  return $.ajax({
    url: `/api/searches?query=${query}`,
  });
};
