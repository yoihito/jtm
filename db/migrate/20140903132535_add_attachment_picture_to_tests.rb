class AddAttachmentPictureToTests < ActiveRecord::Migration
  def self.up
    change_table :tests do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :tests, :picture
  end
end
