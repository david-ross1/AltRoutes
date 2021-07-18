parks = json.array! @parks do |park| 
    json.extract! park, :id, :name
    json.category park.class.name
end

trails = json.array! @trails do |trail| 
    json.extract! trail, :id, :name, :locale
    json.category trail.class.name
end


trails + parks