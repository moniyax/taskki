# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_secure_token

  validates :email, :username, presence: true
  validates :email, uniqueness: true

  has_many :projects
  has_many :tasks, through: :projects

  def public_attributes
    attributes.slice('id', 'username', 'token', 'email')
  end
end
