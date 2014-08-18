class CreateSlides < ActiveRecord::Migration
  def up
    create_table :slides do |t|
      
      t.boolean :has_image
      t.integer :author_id
      t.string :author_type
      t.string :background_color

      t.timestamps
    end

    Slide.create_translation_table! :question=>:string, :description=>:text
  end

  def down
  	drop_table :slides
  	Slide.drop_translation_table!
  end
end
