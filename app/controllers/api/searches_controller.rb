class Api::SearchesController < ApplicationController

  def index
    if params[:query]
      query_string = params[:query].split(" ").join("%")
      @trails = Trail.where("name ILIKE ?", "%#{query_string}%")
      @parks = Park.where("name ILIKE ?", "%#{query_string}%")
    else
      @trails = Trail.all
      @parks = Park.all
    end
    render :search_results
  end
end
