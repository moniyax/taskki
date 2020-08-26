# frozen_string_literal: true

class ChangeProjectIdForeignKeyTypeToUuid < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :project_id, :uuid, using: 'project_id::uuid'
  end
end
