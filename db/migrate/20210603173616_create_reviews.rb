class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false, index: true 
      t.integer :trail_id, null: false, index: true 
      t.integer :rating, null: false 
      t.text :text, null: false 
      t.date :date, null: false 

      t.timestamps 
    end
  end
end
