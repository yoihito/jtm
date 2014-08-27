class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  enable_authorization
end
