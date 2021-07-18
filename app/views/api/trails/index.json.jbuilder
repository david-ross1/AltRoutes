json.array! @trails do |trail| 
  json.extract! trail, :id, 
                       :park_id, 
                       :time, 
                       :name, 
                       :description, 
                       :distance, 
                       :elevation_gain, 
                       :difficulty, 
                       :route_type, 
                       :lat, 
                       :lon, 
                       :locale
  json.coverPhotoURL url_for(trail.coverPhoto)
end
