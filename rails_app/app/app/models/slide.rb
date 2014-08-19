class Slide < ActiveRecord::Base
	translates :question,:description
	has_and_belongs_to_many :tests
	belongs_to :author, polymorphic: true
end
