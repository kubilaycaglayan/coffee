Rails.application.routes.draw do
  root 'pages#index'

  get '*path', to: 'pages#index', via: :all
end
