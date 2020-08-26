# frozen_string_literal: true

class ChangeUserIdForeignKeyTypeToUuid < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :user_id, :uuid, using: 'user_id::uuid'
  end
end
