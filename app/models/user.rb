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

  def due_tasks
    tasks.where('due_date < ?', DateTime.now)
  end

  def today_tasks
    tasks.where('due_date::TIMESTAMP::DATE = ?', DateTime.now.strftime('%Y-%m-%d'))
  end

  def due_or_today_tasks
    due_tasks.or(today_tasks).order :created_at
  end

  def tasks_by_project(project_id)
    project = projects.find project_id
    project.tasks.order :created_at
  end
end
