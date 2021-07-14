json.array! @parks do |park|
    json.extract! park, :id,
                        :name
                        # :description, 
                        # :acreage, 
                        # :contact, 
                        # :lat, 
                        # :lon, 
                        # :park_type 

  json.backgroundPhotoURL url_for(park.backgroundPhoto)
end


