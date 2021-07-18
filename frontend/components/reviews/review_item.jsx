import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { fetchUsers } from "../../actions/user_actions";

const ReviewItem = props => {
  const { rating } = props.review;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [props.review]);

  const date = new Date(props.review.date).toDateString();
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    rating >= i
      ? stars.push(
          <div key={i} className="selected-star">
            ★
          </div>
        )
      : stars.push(
          <div key={i} className="not-selected-star">
            ★
          </div>
        );
  }

  return (
    <>
      <div>
        <div className="reviewtainer">
          <div className="rev-user-container">
            <div className="review-image">
              <FaUserCircle />
            </div>
            <div className="reviewer-name">
              <div>
                {props.review.reviewer.first_name.length > 1
                  ? `${props.review.reviewer.first_name}  `
                  : ""}
                {props.review.reviewer.last_name.length > 1
                  ? props.review.reviewer.last_name
                  : ""}
              </div>
              <div className="startainer">
                <div className="rev-star-rating">{stars}</div>
                <div className="review-date">{date}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-card-text-container">{props.review.text}</div>
      </div>
    </>
  );
};
export default ReviewItem;
