class Api::HikesController < ApplicationController

  def index
      @trails = Trail.includes(coverPhoto_attachment: :blob)
                     .joins(:reviews).group('trails.id')
                     .select("trails.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")
                     .where(park_id: params[:park_id])
      render :index
  end

  def show
    @hike = Hike.includes(:reviews, :reviewers, :park, coverPhoto_attachment: :blob).find_by(id: params[:id]);
    @nearby_hikes = Trail.where(park_id: @trail.park_id)  
                         .includes(coverPhoto_attachment: :blob)
                         .where.not(id: @trail.id)
                         .joins(:reviews).group('trails.id')
                         .select("trails.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")       
    render :show
  end
end
