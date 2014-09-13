class UserPolicy < ApplicationPolicy
	permit :show

	def update?
		same_user
	end

	def change_password?
		update?
	end

	def change_avatar?
		update?
	end

private
	
	def same_user
		@user.id == @scope.id
	end
end
