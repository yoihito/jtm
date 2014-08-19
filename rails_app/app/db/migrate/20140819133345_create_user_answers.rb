class CreateUserAnswers < ActiveRecord::Migration
  def change
    create_table :user_answers do |t|
      t.belongs_to :user
      t.belongs_to :test
      t.integer :answers, array: true
      t.timestamps
    end
  end
end
