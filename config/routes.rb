Rails.application.routes.draw do
  get 'profile/index'

  scope '/tests' do 
  	get 'pass/:id', to: 'test_passing#get'
  	post 'save/:id', to: 'test_passing#save'
  	get 'result/:id', to: 'test_passing#result'
  end

  scope '/page' do 
  	get 'index', to: 'page#index'
  end

  get 'market/show'


  devise_for :users
  resources :questions
  resources :tests
  resources :users
  root 'page#index'
end
