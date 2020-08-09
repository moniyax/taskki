# frozen_string_literal: true

class SetTasksCompletedColumnDefault < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :completed, :boolean, default: false
  end
end
