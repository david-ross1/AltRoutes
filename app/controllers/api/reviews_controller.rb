class Api::ReviewsController < ApplicationController
  def index 
    @reviews = Review.all.includes(:reviewer)
    render :index 
  end

  def create 
    @review = Review.create(review_params) 
    if @review.save 
      render '/api/reviews/show' 
    else 
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update 
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params) 
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422 
    end
  end

  def destroy 
    @review = Review.find_by(id: param[:id])
    @review.destroy! 
  end

  private 

  def review_params 
    params.require(:review).permit(:user_id, :trail_id, :rating, :text, :date)
  end
end
