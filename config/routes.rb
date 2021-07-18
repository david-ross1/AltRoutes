Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do 
    resource :session, only: [:create, :destroy]
    resource :user, only: [:create]
    resources :reviews, only: [:create, :show, :new]
    resources :searches, only: [:index]
    resources :trails, only: [:show, :index] do 
      resources :reviews, only: [:index]
    end
    resources :parks, only: [:show, :index]
    resources :users, only: [:create, :index, :new]
    get 'trails/nearby_trails/:id', to: 'trails#nearby_trails' 
    get 'parks/park_trails/:id', to: 'parks#park_trails'
  end
end

