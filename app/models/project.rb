# frozen_string_literal: true

class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks

  validates :name, presence: true

  def public_attributes
    attributes.slice('id', 'name', 'inbox').merge({ 'createdAt' => created_at })
  end
end
