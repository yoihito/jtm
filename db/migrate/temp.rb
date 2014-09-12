class ChangeColumnRatingInTests < ActiveRecord::Migration
  def up
  	change_table :tests do |t|
  		t.remove :rating
  		t.float :rating, default: 0.0
  	end
  end

  def down
  	change_table :tests do |t|
  		t.remove :rating
  		t.integer :rating, default: 0
  	end
  end
end
