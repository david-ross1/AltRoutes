export const fetchReviews = trail_id =>
  $.ajax({
    method: "GET",
    url: `/api/trails/${trail_id}/reviews`,
  });

export const fetchReview = reviewId =>
  $.ajax({
    url: `/api/reviews/${reviewId}`,
  });

export const createReview = review =>
  $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: { review },
  });

export const updateReview = review =>
  $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review },
  });

export const deleteReview = reviewId =>
  $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`,
  });
