class Publisher < ActiveRecord::Base
	has_many :tests, as: :author
end
