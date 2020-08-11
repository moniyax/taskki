# frozen_string_literal: true

class Login
  include ActiveModel::Validations
  attr_accessor :email, :password

  validates :email, presence: true
  validates :password, presence: true

  def self.create(email, password)
    l = Login.new
    l.email = email
    l.password = password
    l.validate
    l
  end

  def valid?
    errors.none?
  end

  def error_msg
    errors.full_messages if errors.any?
  end
end
