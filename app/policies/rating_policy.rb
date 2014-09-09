class RatingPolicy < ApplicationPolicy
	def create?
		@user
	end

	def destroy?
		@user
	end
end