class Slide < ActiveRecord::Base
	attr_reader :comment

	has_attached_file :picture, styles: { return_medium: "1280x1280>", medium: "640x640>" }, :default_url => "/images/:style/missing.png"
  	validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/
  	validates_attachment_file_name :picture, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/]
  	validates_attachment :picture, size: { in: 0..1500.kilobytes}
	translates :question,:description
	has_and_belongs_to_many :tests
	belongs_to :author, polymorphic: true
	has_many :comments, as: :entity

	def init_comment_form
		@comment = Comment.new(entity: self)
	end
end
