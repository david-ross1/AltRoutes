Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { formats: :json } do 
    resource :session, only: [:create, :destroy]
    resource :user, only: [:create]
    resources :reviews, only: [:create, :show, :new, :update, :destroy]

    resources :trails, only: [:show, :index] do 
      resources :reviews, only: [:index]
    end

    resources :parks, only: [:show, :index]
    get 'trails/nearby_trails/:id', to: 'trails#nearby_trails' 
    get 'parks/trails_in_park/:id', to: 'parks#trails_in_park'

    resources :users, only: [:create, :index, :new]
  end
end

