class AddCounterCacheToTest < ActiveRecord::Migration
  def up
    add_column :tests, :user_answers_count, :integer,  default: 0, null: false

    Test.select(:id).all do |result|
      Test.reset_counters(result.id, :user_answers)
    end
  end

  def down
    remove_column :tests, :user_answers_count
  end

end
