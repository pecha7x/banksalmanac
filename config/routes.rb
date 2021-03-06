# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  namespace :api do
    resources :banks, only: %i[index show update]
  end

  get '*path', to: 'pages#index', via: :all
end
