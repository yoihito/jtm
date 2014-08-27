class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  enable_authorization unless :devise_controller?
end
