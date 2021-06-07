json.extract! @trail, :id, :name, :description, :distance, :elevation_gain, :difficulty, :park_id, :route_type, :lat, :lon





















































# json.trail do 
#   json.extract! @trail, :id, :name, :description, :distance, :elevation_gain, :difficulty, :park_id, :route_type, :lat, :lon
  # json.coverPhotoURL url_for(@trail.coverPhoto) 
  # json.parkName @hike.park.name 
# end

# json.nearbyTrails do 
#   json.array! @nearby_trails do |trail| 
#     json.extract! trail, :id, :name, :description, :distance,  :elevation_gain, :difficulty, :park_id, :route_type, :lat, :lon
#     json.coverPhotoURL url_for(trail.coverPhoto)
#   end
# end