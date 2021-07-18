import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
// import { deleteReview, fetchReviews } from "../../util/reviews_api_util";
import { fetchReviews } from "../../util/reviews_api_util";
import { useParams } from "react-router-dom";

const ReviewItem = props => {
  const { rating } = props.review;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [props.review]);


  const currentUser = useSelector(
    state => state.entities.users[state.session.id]
  );
  const params = useParams();
  const date = new Date(props.review.date).toDateString();

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    rating >= i
      ? stars.push(
          <div key={i} className="active-star">
            ★
          </div>
        )
      : stars.push(
          <div key={i} className="inactive-star">
            ★
          </div>
        );
  }

  const renderDelete =
    currentUser && currentUser.id === props.review.user_id ? (
      <div
        className="review-delete-container"
        onClick={() => {
          deleteReview(props.review.id);
          fetchReviews(params.trailId);
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    ) : (
      ""
    );

  return (
    <>
      <div className="review-card-container">
        <div className="review-card-sub-container">
          <div className="review-user-info-cont">
            <div className="review-card-user-img">
              <FaUserCircle />
            </div>
            <div className="review-card-user-name">
              <div className="review-first-name">
                {props.review.reviewer.first_name.length > 1
                  ? `${props.review.reviewer.first_name}  `
                  : ""}
                {props.review.reviewer.last_name.length > 1
                  ? props.review.reviewer.last_name
                  : ""}
              </div>
              <div className="star-date-container">
                <div className="review-card-rating-stars">{stars}</div>
                <div className="review-card-date">{date}</div>
              </div>
            </div>
          </div>
          <div className="review-card-post-rating-cont">
            <div className="review-card-rating-cont">
              <div className="review-card-rating-title"></div>
            </div>
          </div>
        </div>
        <div className="review-card-text-container">{props.review.text}</div>
      </div>
      {renderDelete}
    </>
  );
};
export default ReviewItem;
