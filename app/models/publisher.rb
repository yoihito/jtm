class Publisher < ActiveRecord::Base
	has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>"}, default_url: ':style/missing.png'
	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
	has_many :tests, as: :author
	has_many :likes, as: :entity
	has_many :fans, through: :likes, source: :author, source_type: 'User'


	def like(user)
		if self.fans.where(id: user.id).empty?
			self.fans<<user
		end

	end

	def dislike(user)
		unless self.fans.where(id: user.id).empty?
			self.fans.destroy(user)
		end
	end
end
