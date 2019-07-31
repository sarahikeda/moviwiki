class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :review_id
      t.string :content
      t.integer :movie_id
    end
  end
end
