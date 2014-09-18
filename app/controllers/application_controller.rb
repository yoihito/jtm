class ApplicationController < ActionController::Base
  include Pundit
  before_filter :configure_devise_params, if: :devise_controller?
#  check_authorization unless :devise_controller?
 # protect_from_forgery with: :exception
 # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

protected

  def configure_devise_params
    devise_parameter_sanitizer.for(:sign_up) do |u|
      u.permit(:name, :email, :password)
    end
    devise_parameter_sanitizer.for(:account_update) do |u|
   	  u.permit(:name, :email, :password)
    end
  end

  def record_not_found
    redirect_to :index
  end

  def after_sign_in_path_for(resource)
    if session[:test_pass]
      ua = UserAnswer.find_or_initialize_by(user_id: current_user.id, test_id: session[:test_pass]['test_id'])
      ua.answers = session[:test_pass]['answers']
      ua.save
      session.delete(:test_pass)
      return result_test_path(ua.test)
    end
    tests_path
  end


end
