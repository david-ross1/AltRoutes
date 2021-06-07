# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  date       :date             not null
#  rating     :integer          not null
#  text       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  trail_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_reviews_on_trail_id  (trail_id)
#  index_reviews_on_user_id   (user_id)
#
class Review < ApplicationRecord
  validates :rating, :text, presence: true 
  
  belongs_to :reviewer, 
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :trail, 
    foreign_key: :trail_id, 
    class_name: "Trail" 
end
