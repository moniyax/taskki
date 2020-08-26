# frozen_string_literal: true

class Task < ApplicationRecord
  validates :text, presence: true
  belongs_to :project

  def public_attributes
    attributes.slice('id', 'text', 'completed', 'archived', 'notes').merge({ 'createdAt' => created_at, 'projectId' => project_id })
  end
end
