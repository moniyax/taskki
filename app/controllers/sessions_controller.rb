# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    login = Login.create params[:email], params[:password]
    unless login.valid?
      render_json_validation_error(login.errors.full_messages, :sign_in_error)
      return
    end

    if (u = User.find_by(email: params[:email]))
      if (user = u.authenticate(params[:password]))
        render json: user.public_attributes
      else
        render_sign_in_error
      end
    else
      render_sign_in_error
    end
  end

  def render_sign_in_error
    render_json_error :unauthorized, :sign_in_error
  end

  def destroy; end
end
