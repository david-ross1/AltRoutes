json.array! @reviews do |review| 
    json.extract! review, :id, 
                          :reviewer, 
                          :user_id, 
                          :trail_id, 
                          :rating, 
                          :text, 
                          :date
end