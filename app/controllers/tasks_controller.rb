# frozen_string_literal: true

class TasksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound do |_e|
    render_json_error :not_found, :task_not_found
  end

  def index
    tasks = current_user.tasks
    render json: tasks.map(&:public_attributes)
  end

  def create
    task = current_user.tasks.build(task_params)
    unless task.save
      render_task_json_validation_error task
      return
    end

    render json: task.public_attributes
  end

  private

  def task_params
    params.permit(:id, :text, :completed)
  end

  def render_task_json_validation_error(task)
    render_json_validation_error task.errors.full_messages, 'task_error'
  end
end
