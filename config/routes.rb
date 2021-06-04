Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :reviews, only: [:create, :index, :update, :destroy]
  end
end

