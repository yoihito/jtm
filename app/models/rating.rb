class Rating < ActiveRecord::Base
	belongs_to :entity, polymorphic: true
	belongs_to :user

end
