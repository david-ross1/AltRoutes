json.array! @trails_in_park do |trail|
    json.extract! trail, :id, :name, :description, :distance, :elevation_gain, :lat, :lon, :route_type, :difficulty, :park_id, :time, :locale, :backgroundPhotoUrl
end


