Rails.application.routes.draw do
  root 'sessions#new'
  get 'sessions/create'
  get 'sessions/destroy'
  devise_for :users
  #root 'pages#index'

  get '*path', to: 'pages#index', via: :all
end
