class Api::TrailsController < ApplicationController
  
  def index 
    @trails = Trail.all 
    
    render :index 
  end  
  
  def show 
    @trail = Trail.find(params[:id])
    @local_trails = Trail.where(park_id: @trail.park_id)

    render :show
  end
end