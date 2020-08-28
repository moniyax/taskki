# frozen_string_literal: true

class TasksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound do |_e|
    render_json_error :not_found, :task_not_found
  end

  def index
    project = current_user.projects.find params[:project_id]
    tasks = project.tasks.order :created_at
    render json: tasks.map(&:public_attributes)
  end

  def create
    project = current_user.projects.find params[:project_id]
    task = project.tasks.build(task_params)
    unless task.save
      render_task_json_validation_error task
      return
    end

    render json: task.public_attributes
  end

  def update
    task = current_user.tasks.find(task_params[:id])
    unless task.update task_params
      render_task_json_validation_error task
      return
    end

    render json: task.public_attributes
  end

  def destroy
    task = current_user.tasks.find(task_params[:id])
    task.destroy

    render json: {}
  end

  private

  def task_params
    params.permit(:id, :text, :completed, :archived, :notes, :due_date, :project_id)
  end

  def render_task_json_validation_error(task)
    render_json_validation_error task.errors.full_messages, 'task_error'
  end
end
