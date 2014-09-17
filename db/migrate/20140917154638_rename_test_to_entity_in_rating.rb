class RenameTestToEntityInRating < ActiveRecord::Migration
  def up
    rename_column :ratings, :test_id, :entity_id
    rename_column :ratings, :test_type, :entity_type
  end

  def down
    rename_column :ratings, :entity_id, :test_id
    rename_column :ratings, :entity_type, :test_type
  end;
end
