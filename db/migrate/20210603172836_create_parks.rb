class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false 
      t.text :description	
      t.integer	:acreage, null: false 
      t.integer :contact, null: false 	
      t.float	:lat, null: false 
      t.float	:lon, null: false 
      t.string :park_type, null: false 

      t.timestamps
    end
  end
end


