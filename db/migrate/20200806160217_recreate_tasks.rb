# frozen_string_literal: true

class RecreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks, id: :uuid do |t|
      t.string :text
      t.boolean :completed

      t.timestamps
    end
  end
end
