import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.review,
      starValueSelected: 1,
      starValueHovered: -1,
      toggleReviewContainer: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleReviewHandler - this.toggleReviewHandler.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.action(this.state);

    this.setState({
      date: "",
      rating: 1,
      text: "",
    });
  }

  updateSelectedStar(idx) {
    this.setState({
      ...this.state,
      starValueSelected: idx,
      rating: idx,
    });
  }

  toggleReviewHandler() {
    this.setState({
      ...this.state,
      toggleReviewContainer: !this.state.toggleReviewContainer,
    });
  }

  updateStarValueHovered(idx) {
    this.setState({ ...this.state, starValueHovered: idx });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { currentUserId } = this.props;
    const { date, text } = this.state;

    if (!currentUserId) {
      return <div className="login-to-comment">Please log in to comment</div>;
    }
    if (!this.state.toggleReviewContainer) {
      return (
        <div className="review-container">
          <div className="review-action-buttons">
            <button
              className="rev-button"
              onClick={() => this.toggleReviewHandler()}
            >
              Write review
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="review-container">
        <div className="review-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="review-post-date-container">
              <div className="review-title">
                <p>Date</p>
              </div>
              <div className="date-input">
                <input
                  className="review-date-input"
                  type="date"
                  value={date}
                  onChange={this.update("date")}
                />
              </div>
              <div className="review-rating-container">
                <div className="review-title">
                  <p>Rating: </p>
                </div>
                <div className="review-rating-stars">
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, starValueHovered: -1 })
                    }
                    onMouseEnter={() => this.updateStarValueHovered(1)}
                    onClick={() => this.updateSelectedStar(1)}
                    className={`star ${
                      this.state.starValueHovered !== -1 &&
                      1 <= this.state.starValueHovered
                        ? "selected-star"
                        : ""
                    } ${
                      this.state.starValueHovered === -1 &&
                      this.state.starValueSelected >= 1
                        ? "selected-star"
                        : ""
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, starValueHovered: -1 })
                    }
                    onMouseEnter={() => this.updateStarValueHovered(2)}
                    onClick={() => this.updateSelectedStar(2)}
                    className={`star ${
                      this.state.starValueHovered !== -1 &&
                      2 <= this.state.starValueHovered
                        ? "selected-star"
                        : ""
                    } ${
                      this.state.starValueHovered === -1 &&
                      this.state.starValueSelected >= 2
                        ? "selected-star"
                        : ""
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, starValueHovered: -1 })
                    }
                    onMouseEnter={() => this.updateStarValueHovered(3)}
                    onClick={() => this.updateSelectedStar(3)}
                    className={`star ${
                      this.state.starValueHovered !== -1 &&
                      3 <= this.state.starValueHovered
                        ? "selected-star"
                        : ""
                    } ${
                      this.state.starValueHovered === -1 &&
                      this.state.starValueSelected >= 3
                        ? "selected-star"
                        : ""
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, starValueHovered: -1 })
                    }
                    onMouseEnter={() => this.updateStarValueHovered(4)}
                    onClick={() => this.updateSelectedStar(4)}
                    className={`star ${
                      this.state.starValueHovered !== -1 &&
                      4 <= this.state.starValueHovered
                        ? "selected-star"
                        : ""
                    } ${
                      this.state.starValueHovered === -1 &&
                      this.state.starValueSelected >= 4
                        ? "selected-star"
                        : ""
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, starValueHovered: -1 })
                    }
                    onMouseEnter={() => this.updateStarValueHovered(5)}
                    onClick={() => this.updateSelectedStar(5)}
                    className={`star ${
                      this.state.starValueHovered !== -1 &&
                      5 <= this.state.starValueHovered
                        ? "selected-star"
                        : ""
                    } ${
                      this.state.starValueHovered === -1 &&
                      this.state.starValueSelected >= 5
                        ? "selected-star"
                        : ""
                    }`}
                  >
                    ★
                  </div>
                </div>
              </div>
            </div>

            <div className="review-text-container">
              <div className="review-title">
                <p></p>
              </div>
              <div className="review-text-area-cont">
                <textarea
                  className="review-text-input"
                  value={text}
                  onChange={this.update("text")}
                  placeholder="write a review..."
                />
              </div>
            </div>
            <div className="review-form-buttons">
              <button className="rev-button-1">Submit Review</button>
              <button
                className="rev-button-2"
                onClick={() => this.toggleReviewHandler()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
