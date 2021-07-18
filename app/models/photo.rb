# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  caption    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  trail_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_photos_on_trail_id  (trail_id)
#  index_photos_on_user_id   (user_id)
#
class Photo < ApplicationRecord
  belongs_to :trail
  belongs_to :user 

end
