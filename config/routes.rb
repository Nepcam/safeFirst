Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json } #controllers: { sessions: 'auth' },

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
  get '/dashboard', to: 'dashboard#index'
end
