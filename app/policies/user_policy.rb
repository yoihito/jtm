class UserPolicy < ApplicationPolicy
	permit :show

	def edit(current_user, user)
		same_user(current_user,user)
	end

	def update(current_user, user)
		same_user(current_user,user)
	end

	def change_password(current_user, user)
		same_user(current_user,user)
	end

private
	
	def same_user(current_user, user)
		current_user == user
	end
end
