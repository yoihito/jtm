class Test < ActiveRecord::Base
	translates :title,:description
	has_and_belongs_to_many :slides
	accepts_nested_attributes_for :slides
	belongs_to :author, polymorphic: true
	has_many :users_tests
	has_many :users, through: :user_answers
end
