# frozen_string_literal: true

class TasksController < ApplicationController
  before_action :set_task, only: %i[show edit update destroy]

  rescue_from ActiveRecord::RecordNotFound do |_e|
    render_json_error :not_found, :task_not_found
  end

  def index
    @tasks = Task.all
  end

  def show; end

  def create
    @task = Task.new(task_params)
    unless @task.save
      render_task_json_validation_error @task
      return
    end

    render json: @task.public_attributes
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.permit(:id, :text, :completed)
  end

  def render_task_json_validation_error(task)
    render_json_validation_error task.errors.full_messages, 'task_error'
  end
end
