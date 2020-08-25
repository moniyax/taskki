# frozen_string_literal: true

class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects, id: :uuid do |t|
      t.string :name
      t.string :user_id
      t.boolean :inbox, default: false

      t.timestamps
    end
  end
end
