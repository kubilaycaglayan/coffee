Rails.application.routes.draw do
  # post 'sessions/create'
  # delete 'sessions/destroy'
  root 'pages#index'

  resources :sessions, only: [:create, :destroy]

  namespace :api, :defaults => {:format => :json} do
    resources :coffees, only: [:index, :show]
    resources :favorites, only: [:index, :show, :create, :destroy]
  end

  get '*path', to: 'pages#index', via: :all
end
