class Publisher < ActiveRecord::Base
	has_attached_file :avatar, styles: { retina_medium: "400x800>", medium: "200x400>", retina_thumb: "100x100#", thumb: "50x50#"}, default_url: '/images/:style/missing.png'
	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
	# validates_attachment_file_name :avatar, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/]
  validates_attachment :avatar, size: { in: 0..1500.kilobytes}
	has_many :tests, as: :author, dependent: :destroy
	has_many :likes, as: :entity, dependent: :delete_all
	has_and_belongs_to_many :owners, class_name: 'User'
	has_many :fans, through: :likes, source: :author, source_type: 'User'



	def liked?(user)
		not self.likes.where(author: user).empty?
	end

  def is_owner?(user)
    self.owners.include?(user)
  end

end
