class CreateReviewsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :movie_id
      t.integer :comment_id
      t.string :rating_id
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
