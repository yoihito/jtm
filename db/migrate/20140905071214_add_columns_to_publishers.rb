class AddColumnsToPublishers < ActiveRecord::Migration
  def change
  	change_table :publishers do |t|
  		t.column :description, :string, default: ""
  		t.column :profile, :json, default: {}
  	end
  end
end
