# frozen_string_literal: true

class Task < ApplicationRecord
  validates :text, presence: true

  def public_attributes
    attributes.slice('id', 'text', 'completed')
  end
end
