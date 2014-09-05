class Like < ActiveRecord::Base
	belongs_to :author, polymorphic: true	
	belongs_to :entity, polymorphic: true
end