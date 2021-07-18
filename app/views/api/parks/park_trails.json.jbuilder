json.array! @park_trails do |trail|
    json.extract! trail, :id, :name, :description, :distance, :elevation_gain, :lat, :lon, :route_type, :difficulty, :park_id, :time, :locale
    json.coverPhotoURL url_for(trail.coverPhoto)
end


