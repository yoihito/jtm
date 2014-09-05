class AddAttachmentAvatarToPublishers < ActiveRecord::Migration
  def self.up
    change_table :publishers do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :publishers, :avatar
  end
end
