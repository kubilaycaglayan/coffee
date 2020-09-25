Rails.application.routes.draw do
  # root 'sessions#new'
  post 'sessions/create'
  delete 'sessions/destroy'
  root 'pages#index'

  get '*path', to: 'pages#index', via: :all
end
