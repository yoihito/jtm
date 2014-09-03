class Test < ActiveRecord::Base
	translates :title,:description
	has_and_belongs_to_many :slides
	accepts_nested_attributes_for :slides
	belongs_to :author, polymorphic: true
	has_many :user_answers
	has_many :users, through: :user_answers

	def is_passed?(current_user)
      self.user_answers.where(user_id: current_user.id).count > 0
	end

end
