class Rating < ActiveRecord::Base
	belongs_to :test, polymorphic: true
	belongs_to :user

end
