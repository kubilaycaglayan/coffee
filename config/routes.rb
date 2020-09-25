Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  get '*path', to: 'pages#index', via: :all
end
