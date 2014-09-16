module ApplicationHelper
	def it_me? user
		current_user == user
	end

  def clear_form form, type, name
    form
  end
end
