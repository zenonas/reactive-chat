Rails.application.routes.draw do
  resources :channels
  devise_for :users
  root 'home#index'
end
