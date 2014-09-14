class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.references :author, polymorphic: true
      t.references :entity, polymorphic: true
      t.timestamps
    end
  end
end
