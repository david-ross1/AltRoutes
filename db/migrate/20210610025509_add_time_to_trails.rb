class AddTimeToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :time, :string, null: false 
  end
end
