class RenameUserAnswers < ActiveRecord::Migration
  def up
  	rename_table :user_answers, :users_tests
  end

  def down
  	rename_table :users_tests, :user_answers
  end
end
