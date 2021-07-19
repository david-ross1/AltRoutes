import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.review,
      value: 1,
      hovered: -1,
      toggled: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.action(this.state);

    this.setState({
      date: '',
      rating: 1,
      text: '',
    });
  }

  handleToggle() {
    this.setState({
      ...this.state,
      toggled: !this.state.toggled,
    });
  }

  updateRating(idx) {
    this.setState({
      ...this.state,
      value: idx,
      rating: idx,
    });
  }

  updateHoveredRating(idx) {
    this.setState({ ...this.state, hovered: idx });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { currentUserId } = this.props;
    const { date, text } = this.state;

    if (!currentUserId) {
      return <div className="login-to-comment">Please log in to comment</div>;
    }
    if (!this.state.toggled) {
      return (
        <div className="review-container">
          <div className="review-action-buttons">
            <button className="rev-button" onClick={() => this.handleToggle()}>
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
                  onChange={this.update('date')}
                />
              </div>
              <div className="review-rating-container">
                <div className="review-title">
                  <p>Rating: </p>
                </div>
                <div className="review-rating-stars">
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, hovered: -1 })
                    }
                    onMouseEnter={() => this.updateHoveredRating(1)}
                    onClick={() => this.updateRating(1)}
                    className={`star ${
                      this.state.hovered !== -1 && this.state.hovered >= 1
                        ? 'selected-star'
                        : ''
                    } ${
                      this.state.hovered === -1 && this.state.value >= 1
                        ? 'selected-star'
                        : ''
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, hovered: -1 })
                    }
                    onMouseEnter={() => this.updateHoveredRating(2)}
                    onClick={() => this.updateRating(2)}
                    className={`star ${
                      this.state.hovered !== -1 && this.state.hovered >= 2
                        ? 'selected-star'
                        : ''
                    } ${
                      this.state.hovered === -1 && this.state.value >= 2
                        ? 'selected-star'
                        : ''
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, hovered: -1 })
                    }
                    onMouseEnter={() => this.updateHoveredRating(3)}
                    onClick={() => this.updateRating(3)}
                    className={`star ${
                      this.state.hovered !== -1 && this.state.hovered >= 3
                        ? 'selected-star'
                        : ''
                    } ${
                      this.state.hovered === -1 && this.state.value >= 3
                        ? 'selected-star'
                        : ''
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, hovered: -1 })
                    }
                    onMouseEnter={() => this.updateHoveredRating(4)}
                    onClick={() => this.updateRating(4)}
                    className={`star ${
                      this.state.hovered !== -1 && this.state.hovered >= 4
                        ? 'selected-star'
                        : ''
                    } ${
                      this.state.hovered === -1 && this.state.value >= 4
                        ? 'selected-star'
                        : ''
                    }`}
                  >
                    ★
                  </div>
                  <div
                    onMouseLeave={() =>
                      this.setState({ ...this.state, hovered: -1 })
                    }
                    onMouseEnter={() => this.updateHoveredRating(5)}
                    onClick={() => this.updateRating(5)}
                    className={`star ${
                      this.state.hovered !== -1 && this.state.hovered >= 5
                        ? 'selected-star'
                        : ''
                    } ${
                      this.state.hovered === -1 && this.state.value >= 5
                        ? 'selected-star'
                        : ''
                    }`}
                  >
                    ★
                  </div>
                </div>
              </div>
            </div>

            <div className="review-text-container">
              <div className="review-title">
                <p />
              </div>
              <div className="review-text-area-cont">
                <textarea
                  className="review-text-input"
                  value={text}
                  onChange={this.update('text')}
                  placeholder="write a review..."
                />
              </div>
            </div>
            <div className="review-form-buttons">
              <button type="button" className="rev-button-1">
                Submit Review
              </button>
              <button
                className="rev-button-2"
                type="button"
                onClick={() => this.handleToggle()}
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
