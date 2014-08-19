class AddCategoryToTest < ActiveRecord::Migration
  def change
    add_column :tests, :category_id, :reference
  end
end
