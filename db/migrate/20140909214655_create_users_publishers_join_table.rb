class CreateUsersPublishersJoinTable < ActiveRecord::Migration
  def change
    create_join_table :users, :publishers # do |t|
    # t.index [:test_id, :slide_id]
    # t.index [:slide_id, :test_id]
    # end
  end
end
