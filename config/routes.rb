Rails.application.routes.draw do
  # root 'sessions#new'
  post 'sessions/create'
  delete 'sessions/destroy'
  root 'pages#index'

  namespace :api, :defaults => {:format => :json} do
    resources :coffees, only: [:index]
  end

  get '*path', to: 'pages#index', via: :all
end
