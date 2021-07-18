export const fetchReviews = trail_id => {
  return $.ajax({
    url: `/api/trails/${trail_id}/reviews`,
  });
};

export const fetchReview = reviewId => {
  return $e.ajax({
    url: `/api/reviews/${reviewId}`,
  });
};

export const createReview = review => {
  return $.ajax({
    url: "/api/reviews",
    method: "POST",
    data: { review },
  });
};

// export const updateReview = review => {
//   return $.ajax({
//     method: "PATCH",
//     url: `/api/reviews/${review.id}`,
//     data: { review },
//   });
// };

// export const deleteReview = reviewId => {
//   return $.ajax({
//     method: "DELETE",
//     url: `/api/reviews/${reviewId}`,
//   });
// };
