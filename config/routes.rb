Angular::Application.routes.draw do

  root to: 'register#welcome'
  
  resources :users

  match ':controller/:action'

end