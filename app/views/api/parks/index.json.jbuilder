json.array! @parks do |park|
    json.extract! park, :id,
                        :name

  json.backgroundPhotoURL url_for(park.backgroundPhoto)
end


