class CreateTests < ActiveRecord::Migration
  def up
    create_table :tests do |t|

      t.references :author, polymorphic: true
      t.boolean :has_background
      t.integer :rating
      t.integer :answers_count
      t.boolean :published

      t.timestamps
    end

    Test.create_translation_table! :title=>:string, :description => :string
  end

  def down
  	drop_table :tests
  	Test.drop_translation_table!
  end
end
