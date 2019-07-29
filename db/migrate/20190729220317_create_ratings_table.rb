class CreateRatingsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :review_id
      t.string :rating_value
    end
  end
end
