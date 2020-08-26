# frozen_string_literal: true

Rails.application.routes.draw do
  get '/404' => 'errors#not_found'
  get '/500' => 'errors#exception'
  scope :api do
    resources :projects do
      resources :tasks, shallow: true
    end
    resources :users
    resource :session, only: %i[create destroy]
  end
end
