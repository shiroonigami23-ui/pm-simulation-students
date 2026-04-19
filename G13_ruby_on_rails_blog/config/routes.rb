Rails.application.routes.draw do
  root 'posts#index'
  resources :posts, param: :slug do
    resources :comments, only: [:create, :destroy]
  end
  get  '/login',  to: 'sessions#new',     as: :login
  post '/login',  to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: :logout
  get  '/signup', to: 'registrations#new', as: :signup
  post '/signup', to: 'registrations#create'
end
