class AddCategoryToTest < ActiveRecord::Migration
  def change
  	change_table :tests do |t|
  		t.belongs_to :category
  	end
  end
end
