Rails.application.routes.draw do
  resources :questions

  resources :tests

  get 'market/show'

  get 'page/index'

  resources :users
end
