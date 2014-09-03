class AddRatingToTests < ActiveRecord::Migration
  def change
  	t.add_column :tests, :rating, :integer
  end
end
