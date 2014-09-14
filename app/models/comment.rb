class Comment < ActiveRecord::Base
	belongs_to :author, polymorphic: true
	belongs_to :entity, polymorphic: true, counter_cache: true



end
