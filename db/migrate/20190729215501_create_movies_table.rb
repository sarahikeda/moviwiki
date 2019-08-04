class CreateMoviesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :poster
      t.string :title
      t.string :year
      t.string :plot

      t.timestamps
    end
  end
end
