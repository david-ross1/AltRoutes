export const fetchReviews = (trail_id) =>
  $.ajax({
    url: `/api/trails/${trail_id}/reviews`,
  });

export const fetchReview = (reviewId) =>
  $.ajax({
    url: `/api/reviews/${reviewId}`,
  });

export const createReview = (review) =>
  $.ajax({
    url: '/api/reviews',
    method: 'POST',
    data: { review },
  });
