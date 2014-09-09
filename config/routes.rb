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
  resources :users do 
    member do
      patch 'update/password', to: 'users#change_password', as: 'change_password'
    end
  end

  resources :likes, only: [:destroy]

  resources :publishers do
    resources :likes, only: [:create, :destroy]
    resources :tests, only: [:new, :edit, :update, :create, :destroy]
  end
  root 'market#index'
end
