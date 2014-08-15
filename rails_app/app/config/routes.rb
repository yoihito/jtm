Rails.application.routes.draw do
  devise_for :users
  resources :questions

  resources :tests

  get 'market/show'

  get 'page/index'

  resources :users
end
