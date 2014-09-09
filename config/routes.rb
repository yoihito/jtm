Rails.application.routes.draw do
  devise_for :users
 

  scope module: 'publishers' do
    resources :publishers, only: [] do
      resources :tests, only: [:index, :create, :destroy, :edit, :new, :update]
    end
  end

  resources :publishers do
    resource :likes, only: [:create, :destroy]
  end

  resources :comments

  resources :tests, only: [:show, :index] do 
    resource :ratings, only: [:create, :destroy]
    member do 
      get 'pass', to: 'test_passing#get', as: 'try'
      post 'save', to: 'test_passing#save'
      get 'result', to: 'test_passing#result'  
    end
  end

  resources :users do 
    member do
      patch 'update/password', to: 'users#change_password', as: 'change_password'
    end
  end
  
  root 'tests#index'
end
