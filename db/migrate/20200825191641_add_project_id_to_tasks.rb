# frozen_string_literal: true

class AddProjectIdToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :project_id, :string
  end
end
