class CreatePublishers < ActiveRecord::Migration
  def change
    create_table :publishers do |t|
      t.string :title
      t.boolean :has_avatar
      t.timestamps
    end
  end
end
