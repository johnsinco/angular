Angular::Application.routes.draw do

  root to: 'application#index'
  
  resources :users

  match ':controller/:action'

end