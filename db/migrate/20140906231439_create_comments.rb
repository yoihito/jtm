class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :author, polymorphic: true
      t.references :entity, polymorphic: true
      t.text :content, default: ""
      t.timestamps
    end
  end
end
