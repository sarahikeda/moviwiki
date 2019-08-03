class CreateRatingsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.belongs_to :comment, index: true
      t.belongs_to :movie, index: true
      t.integer :review_id
      t.integer :comment_id
      t.string :rating_value
      t.integer :movie_id
    end
  end
end
