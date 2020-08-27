# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :get_current_user, only: [:create]

  def create
    @user = User.new(user_params)
    unless @user.save
      render_user_json_validation_error @user
      return
    end

    project = @user.projects.build(name: 'Inbox', inbox: true)
    unless project.save
      render_project_json_validation_error project
      return
    end

    render json: @user.public_attributes
  end

  private

  def user_params
    params.permit(:id, :email, :password, :username)
  end

  def render_user_json_validation_error(user)
    render_json_validation_error user.errors.full_messages, 'sign_up_error'
  end

  def render_project_json_validation_error(project)
    render_json_validation_error project.errors.full_messages, 'project_error'
  end
end
