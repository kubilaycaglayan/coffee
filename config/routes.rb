Rails.application.routes.draw do
  # post 'sessions/create'
  # delete 'sessions/destroy'
  root 'pages#index'

  resources :sessions, only: [:create, :destroy]

  namespace :api, :defaults => {:format => :json} do
    resources :coffees, only: [:index, :show, :create]
    resources :favorites, only: [:index, :create, :destroy]
  end

  get '*path', to: 'pages#index', via: :all
end
