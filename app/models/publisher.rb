class Publisher < ActiveRecord::Base
	has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>"}, default_url: ':style/missing.png'
	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
	has_many :tests, as: :author
	has_many :likes, as: :entity
	has_and_belongs_to_many :owners, class_name: 'User'
	has_many :fans, through: :likes, source: :author, source_type: 'User'



	def liked?(user)
		not self.likes.where(author: user).empty?
	end
	
end
