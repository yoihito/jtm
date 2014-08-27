Rails.application.routes.draw do
  get 'profile/index'
  get 'tests/pass/:id', to: 'test_passing#get'

  devise_for :users
  resources :questions

  resources :tests

  get 'market/show'

  get 'page/index'

  resources :users
  root 'page#index'
end
