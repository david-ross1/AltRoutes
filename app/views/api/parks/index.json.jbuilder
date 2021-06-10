json.array! @parks do |park|
    json.extract! park, :id,
                        :name,
                        :description, 
                        :acreage, 
                        :contact, 
                        :lat, 
                        :lon, 
                        :park_type 
end
