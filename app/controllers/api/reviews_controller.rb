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

    def update
        @review = Review.find(params[:id])
        if @review.update
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review.destroy
            render :index
        end
    end

    private

    def review_params
        params.require(:review).permit(:date, :rating, :text, :trail_id, :user_id)
    end
end