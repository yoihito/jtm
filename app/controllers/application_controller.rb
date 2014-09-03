class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
#  check_authorization unless :devise_controller?
  before_filter :configure_devise_params, if: :devise_controller?
  
protected
  def configure_devise_params
    devise_parameter_sanitizer.for(:sign_up) do |u|
      u.permit(:name, :email, :password)
    end
    devise_parameter_sanitizer.for(:account_update) do |u|
   	  u.permit(:name, :email, :password)
    end
  end
end
