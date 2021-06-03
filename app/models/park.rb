# == Schema Information
#
# Table name: parks
#
#  id          :bigint           not null, primary key
#  acreage     :integer          not null
#  contact     :integer          not null
#  description :text
#  lat         :float            not null
#  lon         :float            not null
#  name        :string           not null
#  park_type   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Park < ApplicationRecord
  validates :acreage, :contact, presence: true 
  validates :park_type, inclusion: { in: %w(Local Regional State National) }
  
  has_many :trails 
end
