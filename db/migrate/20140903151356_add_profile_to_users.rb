class AddProfileToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :profile, :json, default: {}
    add_column :users, :language, :string, default: 'en'
  end
end
