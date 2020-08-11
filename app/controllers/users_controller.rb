# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  def create
    @user = User.new(user_params)
    unless @user.save
      render_user_json_validation_error @user
      return
    end

    render json: @user.public_attributes
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:id, :email, :password, :username)
  end

  def render_user_json_validation_error(user)
    render_json_validation_error user.errors.full_messages, 'sign_up_error'
  end
end
