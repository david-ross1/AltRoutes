class Api::ParksController < ApplicationController 

  def index 
    @parks = Park.all 
    render :index 
  end

  def show 
    @park = Park.find(params[:id])
    render :show 
  end

 def park_trails
    temp_park = Park.find(params[:id])
    @park_trails = Trail.select('*').where('park_id = ?', temp_park.id)
  end
end
