Rails.application.routes.draw do
  get 'profile/index'

  scope '/tests' do 
  	get 'pass/:id', to: 'test_passing#get', as: 'try_test'
  	post 'save/:id', to: 'test_passing#save'
  	get 'result/:id', to: 'test_passing#result'
  end


  devise_for :users
  resources :questions
  resources :tests
  resources :users
  root 'market#index'
end
