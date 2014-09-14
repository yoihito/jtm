class CreateTestsUsersJoinTable < ActiveRecord::Migration
  def change
    create_join_table :tests, :users # do |t|
    # t.index [:test_id, :slide_id]
    # t.index [:slide_id, :test_id]
    # end
  end
end
