Rails.application.routes.draw do
  get 'page/index'

  resources :users
end
