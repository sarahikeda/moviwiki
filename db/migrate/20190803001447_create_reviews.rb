class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :movie, index: true
      t.string :rating_value
      t.text :comment
      t.timestamps
    end
  end
end
