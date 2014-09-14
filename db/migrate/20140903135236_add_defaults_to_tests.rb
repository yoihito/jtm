class AddDefaultsToTests < ActiveRecord::Migration
  def change
    change_column :tests, :rating, :integer, default: 0
    change_column :tests, :published, :boolean, default: false
    change_column :tests, :answers_count, :integer, default: 0
  end
end
