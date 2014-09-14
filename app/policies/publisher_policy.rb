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

	def index?
		@scope.owners.exists?(@user)
	end

  def change_avatar?
    update?
  end


end
