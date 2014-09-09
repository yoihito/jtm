class PublisherPolicy < ApplicationPolicy

	def create?
		@user
	end

	def update?
		@scope.owners.exists?(@user)
	end

	def destroy?
		@scope.owners.exists?(@user)
	end


end