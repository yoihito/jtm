class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.references :test, polymorphic: true
      t.references :user
      t.integer :value
      t.timestamps
    end
  end
end
