class Test < ActiveRecord::Base
	translates :title,:description
	has_and_belongs_to_many :slides
	belongs_to :author, polymorphic: true
	has_many :user_answers
	has_many :users, through: :user_answers
end
