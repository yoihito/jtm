class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.integer :owner_id
      t.boolean :published

      t.timestamps
    end
  end
end
