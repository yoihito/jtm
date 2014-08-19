class Category < ActiveRecord::Base
	translates :title
	has_many :tests
end
