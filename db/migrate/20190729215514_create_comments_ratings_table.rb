class CreateCommentsRatingsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments_ratings do |t|
      t.integer :comment_id
      t.integer :movie_id
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
