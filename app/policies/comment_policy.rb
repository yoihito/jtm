class CommentPolice < ApplicationPolicy

	def create?
		@user
	end

	def update?
		@user
	end

	def destroy?
		@user
	end

end