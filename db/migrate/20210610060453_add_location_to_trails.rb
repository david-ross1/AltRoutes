class AddLocationToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :locale, :string
  end
end
