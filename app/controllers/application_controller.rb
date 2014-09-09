class ApplicationController < ActionController::Base
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

end
