# frozen_string_literal: true

Rails.application.routes.draw do
  # root 'pages#index'

  namespace :api do
    resources :banks
  end

  # get '*path', to: 'pages#index', via: :all
end
