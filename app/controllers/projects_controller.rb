# frozen_string_literal: true

class ProjectsController < ApplicationController
  def index
    projects = current_user.projects.order :created_at
    render json: projects.map(&:public_attributes)
  end

  def show; end

  def create
    project = current_user.projects.build(project_params)

    unless project.save
      render_project_json_validation_error project
      return
    end

    render json: project.public_attributes
  end

  def update
    project = current_user.projects.find(project_params[:id])
    unless project.update project_params
      render_project_json_validation_error project
      return
    end

    render json: project.public_attributes
  end

  def destroy
    project = current_user.projects.find(project_params[:id])
    project.destroy
    render json: {}
  end

  private

  def project_params
    params.permit(:id, :name, :inbox)
  end

  def render_project_json_validation_error(project)
    render_json_validation_error project.errors.full_messages, 'project_error'
  end
end
