json.extract! @trail, :id, 
                      :park_id, 
                      :name, 
                      :description, 
                      :distance, 
                      :elevation_gain, 
                      :difficulty, 
                      :park_id, 
                      :time, 
                      :route_type, 
                      :lat, 
                      :lon, 
                      :locale
                      
json.coverPhotoURL url_for(@trail.coverPhoto)
json.name @trail.park.name 
json.parkDescription @trail.park.description 


















































