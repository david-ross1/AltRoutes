# == Schema Information
#
# Table name: trails
#
#  id             :bigint           not null, primary key
#  description    :text
#  difficulty     :string           not null
#  distance       :float            not null
#  elevation_gain :integer          not null
#  lat            :float            not null
#  lon            :float            not null
#  name           :string           not null
#  route_type     :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  park_id        :integer          not null
#
# Indexes
#
#  index_trails_on_name     (name) UNIQUE
#  index_trails_on_park_id  (park_id)
#
class Trail < ApplicationRecord
  validates :elevation_gain, :lat, :lon, :name, :distance, presence: true
  validates :difficulty, inclusion: { in: ['easy', 'moderate', 'difficult', 'hard'] }
  validates :route_type, inclusion: { in: ['Loop', 'Out & back', 'Point to point'] }

  has_many_attached :photos
  belongs_to :park 
  has_many :reviews 
  has_many :reviewers, 
    through: :reviews, 
    source: :reviewer  
end
