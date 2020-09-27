Rails.application.routes.draw do
  root 'pages#index'

  resources :sessions, only: [:create, :destroy]

  namespace :api, :defaults => {:format => :json} do
    resources :coffees, only: [:index, :show, :create]
    resources :favorites, only: [:index, :create, :destroy]
    resources :users, only: [:create]
  end

  get '*path', to: 'pages#index', via: :all
end
