class AddCommentsCountToTests < ActiveRecord::Migration
  def change
  	add_column :tests, :comments_count, :integer
  end
end
