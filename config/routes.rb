# frozen_string_literal: true

Rails.application.routes.draw do
  get '/404' => 'errors#not_found'
  get '/500' => 'errors#exception'
  scope :api do
    resources :tasks
    resources :users
    resource :session, only: %i[create destroy]
  end
end
