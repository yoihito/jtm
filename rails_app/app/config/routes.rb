Rails.application.routes.draw do
  get 'market/show'

  get 'page/index'

  resources :users
end
