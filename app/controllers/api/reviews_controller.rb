class Api::ReviewsController < ApplicationController

    def new
        @review = Review.new
        render :new
    end

    def create 
        @review = Review.new(review_params)

        if @review.save!
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def index
        @reviews = Review.where(trail_id: params[:trail_id])
        render :index
    end

    private

    def review_params
        params.require(:review).permit(:date, :rating, :text, :trail_id, :user_id)
    end
end