class CreateMoviesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :poster
      t.string :title
      t.string :year
      t.string :plot
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
