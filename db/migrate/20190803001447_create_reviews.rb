class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :rating, index: true
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
