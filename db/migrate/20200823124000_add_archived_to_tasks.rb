# frozen_string_literal: true

class AddArchivedToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :archived, :boolean, default: false
  end
end
